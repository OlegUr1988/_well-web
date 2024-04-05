import { Table, TableContainer } from "@chakra-ui/react";
import _ from "lodash";
import losses from "../../../constants/losses";
import { Asset } from "../../../entities/assets";
import useGetLossesByTypes from "../../../hooks/useGetLossesByTypes";
import LossesTableFoot from "./LossesTableFoot";

const LossesSummaryRow = ({ assets }: { assets: Asset[] }) => {
  const allAttributes = _.flatten(assets.map((asset) => asset.attributes));
  const attributes = useGetLossesByTypes(allAttributes, losses);

  return (
    <TableContainer overflowY="hidden" pr={assets.length > 1 ? 4 : 0}>
      <Table size="md">
        <LossesTableFoot label="Train Total" attributes={attributes} />
      </Table>
    </TableContainer>
  );
};

export default LossesSummaryRow;
