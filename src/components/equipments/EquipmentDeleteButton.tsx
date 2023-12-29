import { useDeleteEquipment } from "../../hooks/equipments";
import ListViewDeleteButton from "../ListViewDeleteButton";
import SimpleAlert from "../SimpleAlert";

const EquipmentDeleteButton = ({ equipmentId }: { equipmentId: number }) => {
  const { mutateAsync, isPending } = useDeleteEquipment();

  return (
    <SimpleAlert
      header="Delete the Equipment?"
      content="Are you sure to delete this Equipment?"
      onSuccessMessage="The equipment was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(equipmentId)}
      renderTriggerButton={(onOpen) => (
        <ListViewDeleteButton onClick={onOpen} />
      )}
    />
  );
};

export default EquipmentDeleteButton;
