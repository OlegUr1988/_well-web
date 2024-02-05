import useTimePeriodStore from "../store/time";
import TimeRangePicker from "./TimeRangePicker";

const StartTimePicker = () => {
  const { startTime, endTime } = useTimePeriodStore((s) => s.timeRange);
  const setStartTime = useTimePeriodStore((s) => s.setStartTime);

  return (
    <TimeRangePicker
      max={endTime}
      isLoading={false}
      value={startTime}
      onPick={(value) => setStartTime(value)}
    />
  );
};

export default StartTimePicker;
