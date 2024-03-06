import { Table, TableContainer } from "@chakra-ui/react";
import losses from "../../../constants/losses";
import { Equipment } from "../../../entities/equipments";
import useGetLossesByTypes from "../../../hooks/useGetLossesByTypes";
import LossesTableBody from "./LossesTableBody";
import LossesTableFoot from "./LossesTableFoot";
import LossesTableHead from "./LossesTableHead";

const LossesTable = ({ equipment }: { equipment: Equipment }) => {
  const allAttributes = equipment.attribute;
  const attributes = useGetLossesByTypes(allAttributes, losses);

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
