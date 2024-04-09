import { Box, HStack, Tag } from "@chakra-ui/react";
import { useState } from "react";
import { MultiSelect, Option } from "react-multi-select-component";
import { Asset } from "../../../entities/assets";
import SelectOptionTag from "./SelectOptionTag";

interface Props {
  assets: Asset[];
  onSelect: (selected: number[]) => void;
}

const AssetsSelectInput = ({ assets, onSelect }: Props) => {
  const [selected, setSelected] = useState<Option[]>([]);

  const options = assets.map((asset) => ({
    label: asset.name,
    value: asset.id,
  }));

  const handleSelect = (selected: Option[]) => {
    onSelect(selected.map((item) => item.value));
    setSelected(selected);
  };

  const customRender = (selected: Option[]) => {
    if (!selected.length) return "Select assets";

    if (selected.length <= 3)
      return selected.map(({ label, value }) => (
        <SelectOptionTag key={value} label={label} />
      ));

    return (
      <HStack justify="space-between">
        <Box>
          {selected.slice(0, 3).map(({ label, value }) => (
            <SelectOptionTag key={value} label={label} />
          ))}
        </Box>
        <Tag>Selected {selected.length - 3} items</Tag>
      </HStack>
    );
  };

  return (
    <MultiSelect
      options={options}
      value={selected}
      valueRenderer={customRender}
      labelledBy={"Select"}
      onChange={handleSelect}
    />
  );
};

export default AssetsSelectInput;
