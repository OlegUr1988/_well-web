import { Record } from "../entities/records";

export const getRecordsByUnits = (records: Record[], units: string) =>
  records.filter(
    (record) => record.PHDTag.unit.name.toLowerCase() === units.toLowerCase()
  );

export const getSumOfRecords = (records: Record[]) =>
  records.reduce((acc, record) => acc + parseFloat(record.value), 0).toFixed(2);

export const calculateRecordsSum = (records: Record[], units: string) =>
  getSumOfRecords(getRecordsByUnits(records, units));
