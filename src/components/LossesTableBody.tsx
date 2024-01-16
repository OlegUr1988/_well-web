import { Tbody, Td, Tr } from "@chakra-ui/react";
import { Attribute } from "../entities/attributes";

const LossesTableBody = ({ attributes }: { attributes: Attribute[] }) => {
  return (
    <Tbody>
      {attributes?.map((attribute) => (
        <Tr key={attribute.id}>
          <Td>{attribute.name}</Td>
          <Td textAlign="center"></Td>
          <Td textAlign="center">kWh</Td>
          <Td textAlign="center"></Td>
          <Td textAlign="center" whiteSpace="nowrap">
            Ton CO2
          </Td>
          <Td textAlign="center"></Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default LossesTableBody;
