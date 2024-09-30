import { Select } from "@chakra-ui/react";

export type chartType = "area" | "line";

const TrendTypeSelector = ({
  onSelect,
}: {
  onSelect: (type: chartType) => void;
}) => {
  return (
    <Select
      size="xs"
      rounded={5}
      width={200}
      m={3}
      onChange={(e) => onSelect(e.target.value as chartType)}
      defaultValue={"area"}
    >
      <option value={"area"}>Area Chart</option>
      <option value={"line"}>Line Chart</option>
    </Select>
  );
};

export default TrendTypeSelector;
