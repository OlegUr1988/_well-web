import { Td, Tr } from "@chakra-ui/react";
import { Attribute } from "../../entities/attributes";
import useGetRecords from "../../hooks/useGetRecords";
import { calculateRecordsSum } from "../../utils/records";

const LossesTableRow = ({ attribute }: { attribute: Attribute }) => {
  const { records } = useGetRecords(attribute.assignment);

  if (!records) return null;

  return (
    <Tr key={attribute.id}>
      <Td>{attribute.name}</Td>
      <Td textAlign="center">{calculateRecordsSum(records!, "kWh")}</Td>
      <Td textAlign="center">kWh</Td>
      <Td textAlign="center"> {calculateRecordsSum(records!, "ton CO2")}</Td>
      <Td textAlign="center" whiteSpace="nowrap">
        Ton CO2
      </Td>
      <Td textAlign="center">{calculateRecordsSum(records!, "%") + "%"}</Td>
    </Tr>
  );
};

export default LossesTableRow;
