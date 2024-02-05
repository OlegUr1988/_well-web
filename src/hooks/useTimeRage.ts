import _ from "lodash";
import moment from "moment";
import timeFormat from "../constants/timeFormat";
import useTimePeriodStore from "../store/time";
import useRecords from "./useRecords";

const useTimeRange = () => {
  const { data: records, isLoading, error } = useRecords({});

  const range = useTimePeriodStore((s) => s.timeRange);
  const setStartTime = useTimePeriodStore((s) => s.setStartTime);
  const setEndTime = useTimePeriodStore((s) => s.setEndTime);
  const setIsChanged = useTimePeriodStore((s) => s.setIsChanged);
  const setPreviousStartTime = useTimePeriodStore(
    (s) => s.setPreviousStartTime
  );
  const setPreviousEndTime = useTimePeriodStore((s) => s.setPreviousEndTime);

  const minTimeStamp = _.min(records?.map((aggr) => aggr.timestamp));
  const min = moment(minTimeStamp).format(timeFormat);

  return {
    isLoading,
    error,
    min,
    range,
    setStartTime,
    setEndTime,
    setIsChanged,
    setPreviousStartTime,
    setPreviousEndTime,
  };
};

export default useTimeRange;
