import { Table, TableContainer } from "@chakra-ui/react";
import _ from "lodash";
import { Equipment } from "../../entities/equipments";
import useGetAttributesByType from "../../hooks/useGetLossesByType";
import LossesTableFoot from "./LossesTableFoot";

const LossesSummaryRow = ({ equipments }: { equipments: Equipment[] }) => {
  const allAttributes = _.flatten(equipments.map((eq) => eq.attribute));
  const attributes = useGetAttributesByType(allAttributes, "loss");

  if (!attributes.length) return null;

  return (
    <TableContainer overflowY="hidden" pr={equipments.length > 1 ? 4 : 0}>
      <Table size="md">
        <LossesTableFoot label="Train Total" attributes={attributes} />
      </Table>
    </TableContainer>
  );
};

export default LossesSummaryRow;
