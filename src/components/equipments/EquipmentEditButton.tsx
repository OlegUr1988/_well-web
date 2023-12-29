import { Equipment } from "../../entities/equipments";
import { useUpdateEquipment } from "../../hooks/equipments";
import ListViewEditButton from "../ListViewEditButton";
import SimpleModal from "../SimpleModal";

const EquipmentEditButton = ({ equipment }: { equipment: Equipment }) => {
  const { mutateAsync, isPending } = useUpdateEquipment(equipment.id);

  return (
    <SimpleModal
      header="Edit Equipment"
      label="Equipment Name"
      submitLabel="Save"
      onSuccessMessage="The new equipment was successfully modified"
      renderTriggerButton={(onOpen) => <ListViewEditButton onClick={onOpen} />}
      defaultValue={equipment.name}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, assetId: equipment.assetId })
      }
    />
  );
};

export default EquipmentEditButton;
