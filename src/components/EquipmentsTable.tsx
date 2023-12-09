import { Table, TableContainer } from "@chakra-ui/react";
import Equipment from "../entities/Equipment";
import EqipmentsTableHead from "./EqipmentsTableHead";
import EquipmentsTableBody from "./EquipmentsTableBody";

const EquipmentsTable = ({ equipments }: { equipments: Equipment[] }) => {
  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped" size="sm">
        <EqipmentsTableHead />
        <EquipmentsTableBody equipments={equipments} />
      </Table>
    </TableContainer>
  );
};

export default EquipmentsTable;
