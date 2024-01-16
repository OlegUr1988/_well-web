import { Record } from "../entities/records";

export const getRecordsByUnits = (records: Record[], units: string) =>
  records.filter((record) => record.PHDTag.unit.name === units);

export const getSumOfRecords = (records: Record[]) =>
  records.reduce((acc, record) => acc + parseFloat(record.value), 0).toFixed(2);
