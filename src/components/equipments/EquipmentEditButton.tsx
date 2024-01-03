import { MdOutlineEdit } from "react-icons/md";
import { Equipment } from "../../entities/equipments";
import { useUpdateEquipment } from "../../hooks/equipments";
import IconButton from "../IconButton";
import SimpleModal from "../SimpleModal";

const EquipmentEditButton = ({ equipment }: { equipment: Equipment }) => {
  const { mutateAsync, isPending } = useUpdateEquipment(equipment.id);

  return (
    <SimpleModal
      header="Edit Equipment"
      label="Equipment Name"
      submitLabel="Save"
      onSuccessMessage="The equipment was successfully modified"
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<MdOutlineEdit color="white" />}
        />
      )}
      defaultValue={equipment.name}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, assetId: equipment.assetId })
      }
    />
  );
};

export default EquipmentEditButton;
