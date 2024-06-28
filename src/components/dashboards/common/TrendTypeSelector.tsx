import { Select } from "@chakra-ui/react";

const TrendTypeSelector = ({
  onSelect,
}: {
  onSelect: (type: string) => void;
}) => {
  return (
    <Select
      size="xs"
      rounded={5}
      width={200}
      m={3}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value={"line"}>Line Chart</option>
      <option value={"area"}>Area Chart</option>
    </Select>
  );
};

export default TrendTypeSelector;
