import { Table, TableContainer } from "@chakra-ui/react";
import losses from "../../../../constants/losses";
import { Asset } from "../../../../entities/assets";
import useGetLossesByTypes from "../../../../hooks/useGetLossesByTypes";
import LossesTableBody from "./LossesTableBody";
import LossesTableFoot from "./LossesTableFoot";
import LossesTableHead from "./LossesTableHead";

const LossesTable = ({ asset }: { asset: Asset }) => {
  const allAttributes = asset.attributes;
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
