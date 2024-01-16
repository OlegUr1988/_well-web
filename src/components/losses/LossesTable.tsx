import { Table, TableContainer } from "@chakra-ui/react";
import { Equipment } from "../../entities/equipments";
import { useAttributes } from "../../hooks/attributes";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import LossesTableBody from "./LossesTableBody";
import LossesTableFoot from "./LossesTableFoot";
import LossesTableHead from "./LossesTableHead";

const LossesTable = ({ equipment }: { equipment: Equipment }) => {
  const {
    data: allAttributes,
    isLoading,
    error,
  } = useAttributes({
    equipmentId: equipment.id,
  });

  const { data: types } = useAttributeTypes();
  const lossType = types?.find((type) => type.name === "Loss");

  const attributes = allAttributes?.filter(
    (attr) => attr.attributeTypeId === lossType?.id
  );

  if (isLoading) return null;

  if (error) return null;

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
