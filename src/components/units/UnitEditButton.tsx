import { Unit } from "../../entities/units";
import { useUpdateUnit } from "../../hooks/units";
import EditButton from "../EditButton";
import SimpleModal from "../SimpleModal";

const UnitEditButton = ({ unit }: { unit: Unit }) => {
  const { mutateAsync, isPending } = useUpdateUnit(unit.id);
  return (
    <SimpleModal
      header="Edit Units"
      label="Units"
      submitLabel="Save"
      defaultValue={unit.name}
      onSuccessMessage="The item was successfully modified"
      renderTriggerButton={(onOpen) => <EditButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default UnitEditButton;
