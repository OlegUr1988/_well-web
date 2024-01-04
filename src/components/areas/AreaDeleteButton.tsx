import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteArea } from "../../hooks/areas";
import SimpleAlert from "../SimpleAlert";
import { IconButton } from "../common/buttons";

const AreaDeleteButton = ({ areaId }: { areaId: number }) => {
  const { mutateAsync, isPending } = useDeleteArea();

  return (
    <SimpleAlert
      header="Delete the Area?"
      content="Are you sure to delete this Area?"
      onSuccessMessage="The area was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(areaId)}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<FaRegTrashAlt color="white" />}
        />
      )}
    />
  );
};

export default AreaDeleteButton;
