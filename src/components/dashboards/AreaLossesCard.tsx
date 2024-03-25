import { Heading } from "@chakra-ui/react";
import _ from "lodash";
import { Asset } from "../../entities/assets";
import { useAssetsByIds } from "../../hooks/assets";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import useRecords from "../../hooks/useRecords";
import DashboardCard from "./DashboardCard";
import { getRecordsByUnits, getSumOfRecords } from "../../utils/records";
import { Attribute } from "../../entities/attributes";

const AreaLossesCard = ({ area }: { area: Asset }) => {
  // Get ids of assets
  const ids = area.children.map((child) => child.id);

  // Fetch assets by ids
  const {
    data: assets,
    isLoading: isAssetLoading,
    error: assetError,
  } = useAssetsByIds({ ids });

  // Fetch attribute types
  const {
    data: types,
    isLoading: isTypesLoading,
    error: typesError,
  } = useAttributeTypes();
  const designType = types?.find(
    (type) => type.name.toLowerCase() === "design loss"
  );
  const operatingType = types?.find(
    (type) => type.name.toLowerCase() === "operating loss"
  );

  const subassets = _.flatten(assets?.map((asset) => asset.children));
  const attributes = subassets.map((s) => s.attributes);
  // Fetch design losses attributes
  const designAttributes = attributes.map((nestedArray) =>
    nestedArray.filter((attr) => attr.attributeTypeId === designType?.id)
  );
  // Fetch operating losses attributes
  const operatingAttributes = attributes.map((nestedArray) =>
    nestedArray.filter((attr) => attr.attributeTypeId === operatingType?.id)
  );

  const assetDesignLosses = getLosses(designAttributes);
  const assetOperatingLosses = getLosses(operatingAttributes);

  if (isAssetLoading || isTypesLoading) return null;
  if (assetError || typesError) return null;

  console.log(!(assetDesignLosses || assetOperatingLosses));
  if (!(assetDesignLosses || assetOperatingLosses)) return null;

  const dataset = assets?.map((asset: Asset) => ({
    id: asset.id,
    name: asset.name,
    losses: {
      designLoss:
        _.sum(asset.children.map((child) => assetDesignLosses![child.id])) || 0,
      operatingLoss:
        _.sum(asset.children.map((child) => assetOperatingLosses![child.id])) ||
        0,
    },
  }));

  console.log(dataset);

  return (
    <DashboardCard>
      <Heading>Losses</Heading>
    </DashboardCard>
  );
};

export default AreaLossesCard;

const getLosses = (attributes: Attribute[][]) => {
  const assignments = attributes.map((nestedArray) =>
    nestedArray.map((ass) => ass.assignments)
  );
  const allTags = _.flattenDepth(assignments, 2);
  const tags = _.uniqBy(allTags, (r) => r.PHDTagId);
  const PHDTagIds = tags.map((t) => t.PHDTagId);
  const {
    data: records,
    isLoading,
    error,
  } = useRecords({
    PHDTagIds,
  });

  console.log(records);

  if (isLoading || error) return null;
  if (!records) return null;
  if (!records?.length) return null;

  const filteredRecords = getRecordsByUnits(records!, "kwh");

  const groupedRecords = _.groupBy(
    filteredRecords,
    (record) => record.PHDTagId
  );
  const designLosses = _.mapValues(groupedRecords, (records) =>
    getSumOfRecords(records)
  );

  const designRecordMappedAttributes = attributes.map((nestedArray) =>
    nestedArray.map((attr) => ({
      ...attr,
      assignments: attr.assignments.map(
        (ass) => designLosses[ass.PHDTagId] || 0
      ),
    }))
  );

  const designAttributesWithTotalValues = designRecordMappedAttributes.map(
    (nesetedArray) =>
      nesetedArray.map((attr) => ({
        assetId: attr.assetId,
        totalLoss: _.sumBy(attr.assignments, (val) =>
          parseFloat(val.toString())
        ),
      }))
  );

  const flattedAttributes = designAttributesWithTotalValues.flat();
  return _.mapValues(
    _.groupBy(flattedAttributes, (attr) => attr.assetId),
    (attr) => _.sum(attr.map((a) => a.totalLoss))
  );
};
