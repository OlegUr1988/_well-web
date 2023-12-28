import { useAddEquipment } from "../../hooks/equipments";
import ListViewModal from "../ListViewModal";

const EquipmentCreateButton = ({ assetId }: { assetId: number }) => {
  const { mutateAsync, isPending } = useAddEquipment();

  return (
    <ListViewModal
      header="Create Equipment"
      label="Equipment Name"
      submitLabel="Create"
      onSuccessMessage="The new equipment was successfully added"
      icon="create"
      isPending={isPending}
      mutateAsync={(data) => mutateAsync({ name: data.name, assetId })}
    />
  );
};

export default EquipmentCreateButton;
