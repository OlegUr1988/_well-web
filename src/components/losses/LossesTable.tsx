import { Table, TableContainer } from "@chakra-ui/react";
import { Equipment } from "../../entities/equipments";
import useGetAttributesByType from "../../hooks/useGetLossesByType";
import LossesTableBody from "./LossesTableBody";
import LossesTableFoot from "./LossesTableFoot";
import LossesTableHead from "./LossesTableHead";

const LossesTable = ({ equipment }: { equipment: Equipment }) => {
  const allAttributes = equipment.attribute;
  const attributes = useGetAttributesByType(allAttributes, "loss");

  return (
    <TableContainer overflowX="auto" whiteSpace="normal">
      <Table variant="striped" size="sm">
        <LossesTableHead />
        <LossesTableBody attributes={attributes!} />
        <LossesTableFoot attributes={attributes!} />
      </Table>
    </TableContainer>
  );
};

export default LossesTable;
