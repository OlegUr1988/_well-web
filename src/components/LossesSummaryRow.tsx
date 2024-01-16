import { Table, TableContainer } from "@chakra-ui/react";
import { Equipment } from "../entities/equipments";
import LossesTableFoot from "./LossesTableFoot";
import _ from "lodash";
import useAttributeTypes from "../hooks/useAttributeTypes";

const LossesSummaryRow = ({ equipments }: { equipments: Equipment[] }) => {
  const allAttributes = _.flatten(equipments.map((eq) => eq.attribute));
  const { data: types } = useAttributeTypes();
  const lossType = types?.find((type) => type.name === "Loss");
  const attributes = allAttributes?.filter(
    (attr) => attr.attributeTypeId === lossType?.id
  );

  return (
    <TableContainer>
      <Table size="md">
        <LossesTableFoot label="Train Total" attributes={attributes} />
      </Table>
    </TableContainer>
  );
};

export default LossesSummaryRow;
