import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteEquipment } from "../../hooks/equipments";
import IconButton from "../IconButton";
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
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColor="gray"
          icon={<FaRegTrashAlt color="white" />}
        />
      )}
    />
  );
};

export default EquipmentDeleteButton;
