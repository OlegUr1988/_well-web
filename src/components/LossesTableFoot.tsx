import { Tfoot, Th, Tr } from "@chakra-ui/react";

const LossesTableFoot = () => {
  return (
    <Tfoot>
      <Tr>
        <Th>Total</Th>
        <Th textAlign="center"></Th>
        <Th textAlign="center">kWh</Th>
        <Th textAlign="center"></Th>
        <Th textAlign="center">Ton CO2</Th>
        <Th textAlign="center"></Th>
      </Tr>
    </Tfoot>
  );
};

export default LossesTableFoot;
