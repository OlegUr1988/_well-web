import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteParameter } from "../../hooks/parameters";
import IconButton from "../IconButton";
import SimpleAlert from "../SimpleAlert";

const ParameterDeleteButton = ({ parameterId }: { parameterId: number }) => {
  const { mutateAsync, isPending } = useDeleteParameter();
  return (
    <SimpleAlert
      header="Delete the Parameter?"
      content="Are you sure to delete this Parameter?"
      onSuccessMessage="The parameter was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(parameterId)}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          variant="unstyled"
          icon={<FaRegTrashAlt />}
        />
      )}
    />
  );
};

export default ParameterDeleteButton;
