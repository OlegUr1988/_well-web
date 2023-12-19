import { Skeleton } from "@chakra-ui/react";
import { useEquipments } from "../../hooks/equipments";
import useEquipmentStore from "../../store/equipments";
import EquipmentsTable from "./EquipmentsTable";

const EquipmentsList = () => {
  const { page, pageSize, searchedName } = useEquipmentStore(
    (s) => s.equipmentQuery
  );

  const {
    data: equipments,
    isLoading,
    error,
  } = useEquipments({ page, pageSize, searchedName });

  if (error) return null;
  return (
    <>
      {isLoading ? (
        <Skeleton h={400} borderRadius={10} />
      ) : (
        <EquipmentsTable equipments={equipments?.results!} />
      )}
    </>
  );
};

export default EquipmentsList;
