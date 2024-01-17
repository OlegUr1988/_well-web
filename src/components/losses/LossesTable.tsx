import { Table, TableContainer } from "@chakra-ui/react";
import { Equipment } from "../../entities/equipments";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import LossesTableBody from "./LossesTableBody";
import LossesTableFoot from "./LossesTableFoot";
import LossesTableHead from "./LossesTableHead";

const LossesTable = ({ equipment }: { equipment: Equipment }) => {
  const allAttributes = equipment.attribute;

  const { data: types } = useAttributeTypes();
  const lossType = types?.find((type) => type.name === "Loss");

  const attributes = allAttributes?.filter(
    (attr) => attr.attributeTypeId === lossType?.id
  );

  return (
    <TableContainer>
      <Table variant="striped" size="sm">
        <LossesTableHead />
        <LossesTableBody attributes={attributes!} />
        <LossesTableFoot attributes={attributes!} />
      </Table>
    </TableContainer>
  );
};

export default LossesTable;
