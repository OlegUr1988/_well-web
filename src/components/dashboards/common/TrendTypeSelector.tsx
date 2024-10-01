import { Select } from "@chakra-ui/react";
import { TrendType } from "../../../entities/trendType";

const TrendTypeSelector = ({
  onSelect,
}: {
  onSelect: (type: TrendType) => void;
}) => {
  return (
    <Select
      size="xs"
      rounded={5}
      width={200}
      m={3}
      onChange={(e) => onSelect(e.target.value as TrendType)}
      defaultValue="area"
    >
      <option value="area">Area Chart</option>
      <option value="line">Line Chart</option>
    </Select>
  );
};

export default TrendTypeSelector;
