import { Tbody } from "@chakra-ui/react";
import { Attribute } from "../../../../entities/attributes";
import LossesTableRow from "./LossesTableRow";

interface Props {
  parentAssetAttributes: Attribute[];
  attributes: Attribute[];
}

const LossesTableBody = ({ parentAssetAttributes, attributes }: Props) => {
  return (
    <Tbody>
      {attributes?.map((attribute) => (
        <LossesTableRow
          key={attribute.id}
          parentAssetAttributes={parentAssetAttributes}
          attribute={attribute}
        />
      ))}
    </Tbody>
  );
};

export default LossesTableBody;
