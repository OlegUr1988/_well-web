import { useAddPart } from "../../hooks/parts";
import ListViewCreateButton from "../ListViewCreateButton";
import SimpleModal from "../SimpleModal";

const PartCreateButton = ({ equipmentId }: { equipmentId: number }) => {
  const { mutateAsync, isPending } = useAddPart();

  return (
    <SimpleModal
      header="Create Equipments Part"
      label="Equipments Part Name"
      submitLabel="Create"
      onSuccessMessage="The new equipment part was successfully added"
      renderTriggerButton={(onOpen) => (
        <ListViewCreateButton onClick={onOpen} />
      )}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync({ name: data.name, equipmentId })}
    />
  );
};

export default PartCreateButton;
