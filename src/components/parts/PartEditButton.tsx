import { MdOutlineEdit } from "react-icons/md";
import { Part } from "../../entities/parts";
import { useUpdatePart } from "../../hooks/parts";
import IconButton from "../IconButton";
import SimpleModal from "../SimpleModal";

const PartEditButton = ({ part }: { part: Part }) => {
  const { mutateAsync, isPending } = useUpdatePart(part.id);

  return (
    <SimpleModal
      header="Edit Equipments Part"
      label="Equipments Part Name"
      submitLabel="Save"
      defaultValue={part.name}
      onSuccessMessage="The equipment part was successfully modified"
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
        mutateAsync({ name: data.name, equipmentId: part.equipmentId })
      }
    />
  );
};

export default PartEditButton;
