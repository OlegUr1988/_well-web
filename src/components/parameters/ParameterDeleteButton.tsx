import { useDeleteParameter } from "../../hooks/parameters";
import DeleteButton from "../DeleteButton";
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
      renderTriggerButton={(onOpen) => <DeleteButton onClick={onOpen} />}
    />
  );
};

export default ParameterDeleteButton;
