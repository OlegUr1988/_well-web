import { MdOutlineEdit } from "react-icons/md";
import { Parameter } from "../../entities/parameters";
import { useUpdatePararameter } from "../../hooks/parameters";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons/";

const ParameterEditButton = ({ parameter }: { parameter: Parameter }) => {
  const { mutateAsync, isPending } = useUpdatePararameter(parameter.id);
  return (
    <SimpleModal
      header="Edit Parameter"
      label="Parameter Name"
      submitLabel="Save"
      onSuccessMessage="The parameter was successfully modified"
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          variant="unstyled"
          icon={<MdOutlineEdit />}
        />
      )}
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
