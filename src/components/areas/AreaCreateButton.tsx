import { FaPlus } from "react-icons/fa";
import { useAddArea } from "../../hooks/areas";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons";

const AreaCreateButton = () => {
  const { mutateAsync, isPending } = useAddArea();

  return (
    <SimpleModal
      header="Create Area"
      label="Area Name"
      submitLabel="Create"
      onSuccessMessage="The new area was successfully added"
      renderTriggerButton={(onOpen) => (
        <IconButton
          variant="outline"
          color="white"
          btnColorScheme=""
          onClick={onOpen}
          w="100%"
          icon={<FaPlus />}
        />
      )}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default AreaCreateButton;
