import { Tbody } from "@chakra-ui/react";
import { Attribute } from "../../entities/attributes";
import LossesTableRow from "./LossesTableRow";

const LossesTableBody = ({ attributes }: { attributes: Attribute[] }) => {
  return (
    <Tbody>
      {attributes?.map((attribute) => (
        <LossesTableRow key={attribute.id} attribute={attribute} />
      ))}
    </Tbody>
  );
};

export default LossesTableBody;
