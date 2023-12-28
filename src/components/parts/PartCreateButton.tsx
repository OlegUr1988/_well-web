import { useAddPart } from "../../hooks/parts";
import ListViewModal from "../ListViewModal";

const PartCreateButton = ({ equipmentId }: { equipmentId: number }) => {
  const { mutateAsync, isPending } = useAddPart();

  return (
    <ListViewModal
      header="Create Equipments Part"
      label="Equipments Part Name"
      submitLabel="Create"
      onSuccessMessage="The new equipment part was successfully added"
      icon="create"
      isPending={isPending}
      mutateAsync={(data) => mutateAsync({ name: data.name, equipmentId })}
    />
  );
};

export default PartCreateButton;
