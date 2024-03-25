import _ from "lodash";
import { Attribute } from "../entities/attributes";
import useRecords from "./useRecords";
import { getRecordsByUnits, getSumOfRecords } from "../utils/records";

const useAreaLosses = (attributes: Attribute[][] | null) => {
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

  if (!PHDTagIds.length) return null;
  if (isLoading || error) return null;

  const filteredRecords = getRecordsByUnits(records!, "kwh");

  const groupedRecords = _.groupBy(
    filteredRecords,
    (record) => record.PHDTagId
  );
  const losses = _.mapValues(groupedRecords, (records) =>
    getSumOfRecords(records)
  );

  const attributesWithLosses = attributes!.map((nestedArray) =>
    nestedArray.map((attr) => ({
      ...attr,
      assignments: attr.assignments.map((ass) => losses[ass.PHDTagId] || 0),
    }))
  );

  const attributesWithTotalLosses = attributesWithLosses.map((nesetedArray) =>
    nesetedArray.map((attr) => ({
      assetId: attr.assetId,
      totalLoss: _.sumBy(attr.assignments, (val) => parseFloat(val.toString())),
    }))
  );

  const flattedAttributes = attributesWithTotalLosses.flat();
  return _.mapValues(
    _.groupBy(flattedAttributes, (attr) => attr.assetId),
    (attr) => _.sum(attr.map((a) => a.totalLoss))
  );
};

export default useAreaLosses;
