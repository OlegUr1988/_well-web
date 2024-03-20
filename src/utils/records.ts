import _ from "lodash";
import { Assignment } from "../entities/assignments";
import { Record } from "../entities/records";

export const getRecordsByUnits = (records: Record[], units: string) =>
  records.filter(
    (record) => record.PHDTag.unit.name.toLowerCase() === units.toLowerCase()
  );

export const getSumOfRecords = (records: Record[]) =>
  _.sumBy(records, (array) => parseFloat(array.value)).toFixed(2);

export const getAverageOfRecords = (
  assignments: Assignment[],
  records: Record[]
) => {
  const filteredRecordsByUnit = getRecordsByUnits(records, "%");
  const groupedRecordsByTagId = _.groupBy(filteredRecordsByUnit, "PHDTagId");

  const averages = _.mapValues(groupedRecordsByTagId, (array) =>
    _.meanBy(array, (item) => parseFloat(item.value))
  );

  const groupedAssignments = _.groupBy(assignments, "attributeId");
  const groupedTagIds = _.mapValues(groupedAssignments, (attr) =>
    attr.map((attr) => attr.PHDTagId)
  );

  const groupedAverageValues = _.mapValues(groupedTagIds, (ids) =>
    ids.map((id) => averages[id])
  );

  const filteredAverageValues = _.mapValues(groupedAverageValues, (array) =>
    array.filter((item) => item)
  );

  const cleanedAverageValues = _.pickBy(
    filteredAverageValues,
    (array) => array.length
  );

  const sumOfAverages = _.sumBy(
    _.values(
      _.mapValues(cleanedAverageValues, (array) =>
        _.meanBy(array, (item) => _.defaultTo(item, 0))
      )
    )
  );

  return sumOfAverages.toFixed(2);
};

export const calculateRecordsSum = (records: Record[], units: string) =>
  getSumOfRecords(getRecordsByUnits(records, units));

export const groupBy = (records: Record[], key: keyof Record) =>
  _.groupBy(records, (item) => item[key]);
