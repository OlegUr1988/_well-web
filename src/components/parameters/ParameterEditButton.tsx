import { Parameter } from "../../entities/parameters";
import { useUpdatePararameter } from "../../hooks/parameters";
import EditButton from "../EditButton";
import SimpleModal from "../SimpleModal";

const ParameterEditButton = ({ parameter }: { parameter: Parameter }) => {
  const { mutateAsync, isPending } = useUpdatePararameter(parameter.id);
  return (
    <SimpleModal
      header="Edit Parameter"
      label="Parameter Name"
      submitLabel="Save"
      onSuccessMessage="The parameter was successfully modified"
      renderTriggerButton={(onOpen) => <EditButton onClick={onOpen} />}
      defaultValue={parameter.name}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({
          name: data.name,
          parameterTypeId: parameter.parameterTypeId,
          partId: parameter.partId,
        })
      }
    />
  );
};

export default ParameterEditButton;
