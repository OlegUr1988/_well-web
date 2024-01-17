import { Tr } from "@chakra-ui/react";
import { Attribute } from "../../entities/attributes";
import useGetRecords from "../../hooks/useGetRecords";
import { calculateRecordsSum } from "../../utils/records";
import LossesTableBodyCell from "./LossesTableBodyCell";
import LossesTableRowSkeleton from "./LossesTableRowSkeleton";

const LossesTableRow = ({ attribute }: { attribute: Attribute }) => {
  const { records, isLoading } = useGetRecords(attribute.assignment);

  if (isLoading) return <LossesTableRowSkeleton label={attribute.name} />;

  if (!records) return null;

  return (
    <Tr>
      <LossesTableBodyCell textAlign="initial">
        {attribute.name}
      </LossesTableBodyCell>
      <LossesTableBodyCell>
        {calculateRecordsSum(records!, "kWh")}
      </LossesTableBodyCell>
      <LossesTableBodyCell>kWh</LossesTableBodyCell>
      <LossesTableBodyCell>
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
