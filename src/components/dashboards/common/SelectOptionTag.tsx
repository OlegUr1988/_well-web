import { Tag, TagLabel } from "@chakra-ui/react";

interface Props {
  label: string | number;
}

const SelectOptionTag = ({ label }: Props) => {
  return (
    <Tag mr={1}>
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};

export default SelectOptionTag;
