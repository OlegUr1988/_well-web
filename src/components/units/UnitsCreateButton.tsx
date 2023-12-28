import { useAddUnit } from "../../hooks/units";
import CreateButton from "../CreateButton";
import SimpleModal from "../SimpleModal";

const UnitsCreateButton = () => {
  const { mutateAsync, isPending } = useAddUnit();

  return (
    <SimpleModal
      header="Create Units"
      label="Units"
      submitLabel="Create"
      onSuccessMessage="The new item was successfully added"
      renderTriggerButton={(onOpen) => <CreateButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default UnitsCreateButton;
