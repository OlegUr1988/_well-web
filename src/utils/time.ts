import moment from "moment";
import { Record } from "../entities/records";
import useTimePeriodStore from "../store/time";

const setTimeRange = () => {
  const range = useTimePeriodStore((s) => s.timeRange);
  let start = 0;
  let end = 0;

  if (range.isChanging) {
    start = Number(moment(range.previousStartTime));
    end = Number(moment(range.previousEndTime));
  } else {
    start = Number(moment(range.startTime));
    end = Number(moment(range.endTime).add(1, "day"));
  }

  return { start, end };
};

export const filterByTimeRange = (records: Record[]) => {
  const { start, end } = setTimeRange();

  if (!records) return [];

  return records.filter(
    (record) =>
      Number(moment(record.timestamp)) >= start &&
      Number(moment(record.timestamp)) <= end
  );
};
