import { MdOutlineEdit } from "react-icons/md";
import { Equipment } from "../../entities/equipments";
import { useUpdateEquipment } from "../../hooks/equipments";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons";

const EquipmentEditButton = ({ equipment }: { equipment: Equipment }) => {
  const { mutateAsync, isPending } = useUpdateEquipment(equipment.id);

  return (
    <SimpleModal
      header="Edit Equipment"
      label="Equipment Name"
      submitLabel="Save"
      defaultValue={equipment.name}
      onSuccessMessage="The equipment was successfully modified"
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<MdOutlineEdit color="white" />}
        />
      )}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, assetId: equipment.assetId })
      }
    />
  );
};

export default EquipmentEditButton;
