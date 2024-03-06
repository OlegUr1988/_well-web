import useTimeRange from "../../hooks/useTimeRage";
import TimeRangePicker from "./TimeRangePicker";

const StartTimePicker = () => {
  const { min, isLoading, range, setStartTime } = useTimeRange();

  return (
    <TimeRangePicker
      min={min}
      max={range.endTime}
      isLoading={isLoading}
      value={range.startTime}
      onPick={(value) => setStartTime(value)}
    />
  );
};

export default StartTimePicker;
