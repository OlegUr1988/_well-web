import { Input, Skeleton } from "@chakra-ui/react";

interface Props {
  min?: string;
  max?: string;
  isLoading: boolean;
  value: string;
  onPick: (value: string) => void;
}

const TimeRangePicker = ({ min, max, isLoading, value, onPick }: Props) => {
  if (isLoading) return <Skeleton h={10} w={250} />;

  return (
    <Input
      min={min}
      max={max}
      value={value}
      size="sm"
      onChange={(e) => onPick(e.target.value)}
      type="date"
    />
  );
};

export default TimeRangePicker;
