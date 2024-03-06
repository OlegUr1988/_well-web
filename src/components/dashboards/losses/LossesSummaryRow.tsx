import { Table, TableContainer } from "@chakra-ui/react";
import _ from "lodash";
import losses from "../../../constants/losses";
import { Equipment } from "../../../entities/equipments";
import useGetLossesByTypes from "../../../hooks/useGetLossesByTypes";
import LossesTableFoot from "./LossesTableFoot";

const LossesSummaryRow = ({ equipments }: { equipments: Equipment[] }) => {
  const allAttributes = _.flatten(equipments.map((eq) => eq.attribute));
  const attributes = useGetLossesByTypes(allAttributes, losses);

  return (
    <TableContainer overflowY="hidden" pr={equipments.length > 1 ? 4 : 0}>
      <Table size="md">
        <LossesTableFoot label="Train Total" attributes={attributes} />
      </Table>
    </TableContainer>
  );
};

export default LossesSummaryRow;
