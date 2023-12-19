import { Table, TableContainer } from "@chakra-ui/table";
import { Asset } from "../../entities/assets";
import AssetsTableBody from "./AssetsTableBody";
import AssetsTableHead from "./AssetsTableHead";

const AssetsTable = ({ assets }: { assets: Asset[] }) => {
  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped" size="sm">
        <AssetsTableHead />
        <AssetsTableBody assets={assets} />
      </Table>
    </TableContainer>
  );
};

export default AssetsTable;
