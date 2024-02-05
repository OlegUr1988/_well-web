import useTimePeriodStore from "../store/time";
import TimeRangePicker from "./TimeRangePicker";

const EndTimePicker = () => {
  const { startTime, endTime } = useTimePeriodStore((s) => s.timeRange);
  const setEndTime = useTimePeriodStore((s) => s.setEndTime);

  return (
    <TimeRangePicker
      min={startTime}
      isLoading={false}
      value={endTime}
      onPick={(value) => setEndTime(value)}
    />
  );
};

export default EndTimePicker;
