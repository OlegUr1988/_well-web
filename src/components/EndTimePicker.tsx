import useTimeRange from "../hooks/useTimeRage";
import TimeRangePicker from "./TimeRangePicker";

const EndTimePicker = () => {
  const { isLoading, range, setEndTime } = useTimeRange();

  return (
    <TimeRangePicker
      min={range.startTime}
      isLoading={isLoading}
      value={range.endTime}
      onPick={(value) => setEndTime(value)}
    />
  );
};

export default EndTimePicker;
