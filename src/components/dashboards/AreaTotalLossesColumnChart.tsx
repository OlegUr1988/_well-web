import _ from "lodash";
import { Asset } from "../../entities/assets";
import { Attribute } from "../../entities/attributes";
import { AttributeType } from "../../entities/attributeType";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import useRecords from "../../hooks/useRecords";
import { getRecordsByUnits, getSumOfRecords } from "../../utils/records";

const AreaTotalLossesColumnChart = ({
  assets,
}: {
  assets: Asset[];
  types: AttributeType[];
}) => {
  const assetDesignLosses = getAreaLosses(
    getAttributesByType(assets, "design loss")
  );
  const assetOperatingLosses = getAreaLosses(
    getAttributesByType(assets, "operating loss")
  );

  if (!assetDesignLosses) return null;

  if (!assetOperatingLosses) return null;

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

  return <div>AreaTotalLossesColumnChart</div>;
};

export default AreaTotalLossesColumnChart;

const getAreaLosses = (attributes: Attribute[][] | null) => {
  const assignments = attributes!.map((nestedArray) =>
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

  if (isLoading || error) return null;

  if (!PHDTagIds.length) return null;

  const filteredRecords = getRecordsByUnits(records!, "kwh");

  const groupedRecords = _.groupBy(
    filteredRecords,
    (record) => record.PHDTagId
  );
  const designLosses = _.mapValues(groupedRecords, (records) =>
    getSumOfRecords(records)
  );

  const designRecordMappedAttributes = attributes!.map((nestedArray) =>
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

const getAttributesByType = (
  assets: Asset[],
  typeName: "design loss" | "operating loss"
) => {
  const { data: types, isLoading, error } = useAttributeTypes();

  if (isLoading) return null;

  if (error) return null;

  const type = types?.find(
    (type) => type.name.toLowerCase() === (typeName as unknown as string)
  );

  const subassets = _.flatten(assets?.map((asset) => asset.children));
  const attributes = subassets.map((s) => s.attributes);
  return attributes.map((nestedArray) =>
    nestedArray
      ? nestedArray.filter((attr) => attr.attributeTypeId === type!.id)
      : []
  );
};
