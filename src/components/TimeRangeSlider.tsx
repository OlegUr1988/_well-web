import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Skeleton,
} from "@chakra-ui/react";
import moment from "moment";
import timeFormat from "../constants/timeFormat";
import useTimeRange from "../hooks/useTimeRage";

const TimeRangeSlider = () => {
  const {
    range,
    min,
    isLoading,
    setStartTime,
    setEndTime,
    setIsChanged,
    setPreviousStartTime,
    setPreviousEndTime,
  } = useTimeRange();

  if (isLoading) return <Skeleton h={4} w="100%" rounded={5}/>;

  const minValue = Number(moment(range.startTime));
  const maxValue = Number(moment(range.endTime));

  const handleOnChange = (values: number[]) => {
    setIsChanged(true);
    setStartTime(moment(values[0]).toString());
    setEndTime(moment(values[1]).toString());
  };

  const handleOnChangeEnd = (values: number[]) => {
    setIsChanged(false);
    setPreviousStartTime(moment(values[0]).toString());
    setPreviousEndTime(moment(values[1]).toString());
  };

  const max = Number(moment(moment().format(timeFormat)));

  return (
    <RangeSlider
      min={Number(moment(min))}
      max={max}
      aria-label={["min", "max"]}
      defaultValue={[minValue, maxValue]}
      value={[minValue, maxValue]}
      onChange={(values) => {
        handleOnChange(values);
      }}
      onChangeEnd={(values) => handleOnChangeEnd(values)}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
};

export default TimeRangeSlider;
