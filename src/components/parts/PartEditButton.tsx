import { Part } from "../../entities/parts";
import { useUpdatePart } from "../../hooks/parts";
import ListViewModal from "../ListViewModal";

const PartEditButton = ({ part }: { part: Part }) => {
  const { mutateAsync, isPending } = useUpdatePart(part.id);

  return (
    <ListViewModal
      header="Edit Equipments Part"
      label="Equipments Part Name"
      submitLabel="Save"
      defaultValue={part.name}
      onSuccessMessage="The new equipment part was successfully modified"
      icon="edit"
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, equipmentId: part.equipmentId })
      }
    />
  );
};

export default PartEditButton;
