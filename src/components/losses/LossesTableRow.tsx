import { Tr } from "@chakra-ui/react";
import { Attribute } from "../../entities/attributes";
import useGetRecords from "../../hooks/useGetRecords";
import { calculateRecordsSum } from "../../utils/records";
import LossesTableBodyCell from "./LossesTableBodyCell";

const LossesTableRow = ({ attribute }: { attribute: Attribute }) => {
  const { records } = useGetRecords(attribute.assignment);

  if (!records) return null;

  return (
    <Tr key={attribute.id}>
      <LossesTableBodyCell textAlign="initial">
        {attribute.name}
      </LossesTableBodyCell>
      <LossesTableBodyCell>
        {calculateRecordsSum(records!, "kWh")}
      </LossesTableBodyCell>
      <LossesTableBodyCell>kWh</LossesTableBodyCell>
      <LossesTableBodyCell>
        {" "}
        {calculateRecordsSum(records!, "ton CO2")}
      </LossesTableBodyCell>
      <LossesTableBodyCell>Ton CO2</LossesTableBodyCell>
      <LossesTableBodyCell>
        {calculateRecordsSum(records!, "%") + "%"}
      </LossesTableBodyCell>
    </Tr>
  );
};

export default LossesTableRow;
