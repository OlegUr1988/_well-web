import { Record } from "../entities/records";
import { getRecordsByUnits, calculateSum } from "./records";

export const calculateTotalDuty = (records: Record[]) =>
  calculateSum(getRecordsByUnits(records, "kWh"));

export const calculateTotalUsefulWork = (records: Record[]) =>
  calculateSum(getRecordsByUnits(records, "kWh"));

export const calculateUsefulWorkRatio = (
  totalUsefulWork: number,
  totalDuty: number
) => {
  const result = totalUsefulWork / totalDuty;
  return isNaN(result) ? 0.0 : result;
};
