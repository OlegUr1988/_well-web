import { useDeleteEquipment } from "../../hooks/equipments";
import ListViewDeleteButton from "../ListViewDeleteButton";

const EquipmentDeleteButton = ({ equipmentId }: { equipmentId: number }) => {
  const { mutateAsync, isPending } = useDeleteEquipment();

  return (
    <ListViewDeleteButton
      header="Delete the Equipment?"
      content="Are you sure to delete this Equipment?"
      onSuccessMessage="The equipment was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(equipmentId)}
    />
  );
};

export default EquipmentDeleteButton;
