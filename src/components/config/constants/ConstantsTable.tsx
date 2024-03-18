import { Table, TableContainer } from "@chakra-ui/react";
import { Constant } from "../../../entities/constants";
import ConstantsTableBody from "./ConstantsTableBody";
import ConstantsTableHead from "./ConstantsTableHead";

const ConstantsTable = ({ constants }: { constants: Constant[] }) => {
  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped" size="sm">
        <ConstantsTableHead />
        <ConstantsTableBody constants={constants} />
      </Table>
    </TableContainer>
  );
};

export default ConstantsTable;
