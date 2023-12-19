import { Table, TableContainer } from "@chakra-ui/react";
import { Equipment } from "../../entities/equipments";
import EquipmentsTableBody from "./EquipmentsTableBody";
import EquipmentsTableHead from "./EquipmentsTableHead";

const EquipmentsTable = ({ equipments }: { equipments: Equipment[] }) => {
  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped" size="sm">
        <EquipmentsTableHead />
        <EquipmentsTableBody equipments={equipments} />
      </Table>
    </TableContainer>
  );
};

export default EquipmentsTable;
