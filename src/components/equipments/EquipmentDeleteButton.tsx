import { useDeleteEquipment, useEquipments } from "../../hooks/equipments";
import useEquipmentStore from "../../store/equipments";
import DeleteButton from "../DeleteButton";

const EquipmentDeleteButton = ({ equipmentId }: { equipmentId: number }) => {
  const { mutateAsync, isPending } = useDeleteEquipment();

  const { page, pageSize } = useEquipmentStore((s) => s.equipmentQuery);
  const { data: equipments } = useEquipments({ page, pageSize });
  const setPage = useEquipmentStore((s) => s.setPage);

  const handlePagination = () => {
    if (equipments?.results.length === 1 && page! > 1) setPage(page! - 1);
  };

  return (
    <DeleteButton
      itemId={equipmentId}
      itemName="equipment"
      routeAfterDelete="/config/equipments"
      isPending={isPending}
      mutateAsync={mutateAsync}
      onSuccess={handlePagination}
    />
  );
};

export default EquipmentDeleteButton;
