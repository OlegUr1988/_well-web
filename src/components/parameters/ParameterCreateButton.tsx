import { useAddParameter } from "../../hooks/parameters";
import { CreateButton } from "../common/buttons";
import SimpleModal from "../SimpleModal";

const ParameterCreateButton = ({
  parameterTypeId,
  partId,
}: {
  parameterTypeId: number;
  partId: number;
}) => {
  const { mutateAsync, isPending } = useAddParameter();
  return (
    <SimpleModal
      header="Create Parameter"
      label="Parameter Name"
      submitLabel="Create"
      onSuccessMessage="The parameter was successfully added"
      renderTriggerButton={(onOpen) => <CreateButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, parameterTypeId, partId })
      }
    />
  );
};

export default ParameterCreateButton;
