import { Part } from "../../entities/parts";
import { useUpdatePart } from "../../hooks/parts";
import ListViewEditButton from "../ListViewEditButton";
import SimpleModal from "../SimpleModal";

const PartEditButton = ({ part }: { part: Part }) => {
  const { mutateAsync, isPending } = useUpdatePart(part.id);

  return (
    <SimpleModal
      header="Edit Equipments Part"
      label="Equipments Part Name"
      submitLabel="Save"
      defaultValue={part.name}
      onSuccessMessage="The new equipment part was successfully modified"
      renderTriggerButton={(onOpen) => <ListViewEditButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, equipmentId: part.equipmentId })
      }
    />
  );
};

export default PartEditButton;
