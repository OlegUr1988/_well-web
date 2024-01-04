import { MdOutlineEdit } from "react-icons/md";
import { Area } from "../../entities/areas";
import { useUpdateArea } from "../../hooks/areas";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons";

const AreaEditButton = ({ area }: { area: Area }) => {
  const { mutateAsync, isPending } = useUpdateArea(area.id);

  return (
    <SimpleModal
      header="Edit Area"
      label="Area Name"
      submitLabel="Save"
      onSuccessMessage="The area was successfully modified"
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<MdOutlineEdit color="white" />}
        />
      )}
      defaultValue={area.name}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default AreaEditButton;
