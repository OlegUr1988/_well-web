import { useAddEquipment } from "../../hooks/equipments";
import ListViewCreateButton from "../ListViewCreateButton";
import SimpleModal from "../SimpleModal";

const EquipmentCreateButton = ({ assetId }: { assetId: number }) => {
  const { mutateAsync, isPending } = useAddEquipment();

  return (
    <SimpleModal
      header="Create Equipment"
      label="Equipment Name"
      submitLabel="Create"
      onSuccessMessage="The new equipment was successfully added"
      renderTriggerButton={(onOpen) => (
        <ListViewCreateButton onClick={onOpen} />
      )}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync({ name: data.name, assetId })}
    />
  );
};

export default EquipmentCreateButton;
