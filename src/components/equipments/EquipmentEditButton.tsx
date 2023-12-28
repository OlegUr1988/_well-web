import { Equipment } from "../../entities/equipments";
import { useUpdateEquipment } from "../../hooks/equipments";
import ListViewModal from "../ListViewModal";

const EquipmentEditButton = ({ equipment }: { equipment: Equipment }) => {
  const { mutateAsync, isPending } = useUpdateEquipment(equipment.id);

  return (
    <ListViewModal
      header="Edit Equipment"
      label="Equipment Name"
      submitLabel="Save"
      onSuccessMessage="The new equipment was successfully modified"
      icon="edit"
      defaultValue={equipment.name}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, assetId: equipment.assetId })
      }
    />
  );
};

export default EquipmentEditButton;
