import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteEquipment } from "../../../hooks/equipments";
import useModelStore from "../../../store/model";
import SimpleAlert from "../SimpleAlert";
import { IconButton } from "../../common/buttons";

const EquipmentDeleteButton = ({ equipmentId }: { equipmentId: number }) => {
  const { mutateAsync, isPending } = useDeleteEquipment();
  const setEquipmentId = useModelStore((s) => s.setEquipmentId);

  return (
    <SimpleAlert
      header="Delete the Equipment?"
      content="Are you sure to delete this Equipment?"
      onSuccessMessage="The equipment was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(equipmentId)}
      onSuccess={() => setEquipmentId(0)}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<FaRegTrashAlt color="white" />}
        />
      )}
    />
  );
};

export default EquipmentDeleteButton;
