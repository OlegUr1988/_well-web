import { Record } from "../entities/records";
import { getRecordsByUnits, getSumOfRecords } from "./records";

export const calculateTotalDuty = (records: Record[]) =>
  getSumOfRecords(getRecordsByUnits(records, "kWh"));

export const calculateTotalUsefulWork = (records: Record[]) =>
  getSumOfRecords(getRecordsByUnits(records, "kWh"));

export const calculateUsefulWorkRatio = (
  totalUsefulWork: string,
  totalDuty: string
) => {
  const result = (parseFloat(totalUsefulWork) / parseFloat(totalDuty)) * 100;
  return isNaN(result) ? 0.0 : result;
};
