import { Th, Thead, Tr } from "@chakra-ui/react";

const LossesTableHead = () => {
  return (
    <Thead>
      <Tr>
        <Th textAlign="center">Loss type</Th>
        <Th textAlign="center">Agg</Th>
        <Th textAlign="center">UOM</Th>
        <Th textAlign="center">Emiss</Th>
        <Th textAlign="center">UOM</Th>
        <Th textAlign="center">Perc</Th>
      </Tr>
    </Thead>
  );
};

export default LossesTableHead;
