import { Table, TableContainer } from "@chakra-ui/react";
import { Unit } from "../../entities/units";
import UnitsTableBody from "./UnitsTableBody";
import UnitsTableHead from "./UnitsTableHead";

const UnitsTable = ({ units }: { units: Unit[] }) => {
  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped" size="sm">
        <UnitsTableHead />
        <UnitsTableBody units={units} />
      </Table>
    </TableContainer>
  );
};

export default UnitsTable;
