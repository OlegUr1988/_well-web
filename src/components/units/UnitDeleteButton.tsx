import { useDeleteUnit } from "../../hooks/units";
import DeleteButton from "../DeleteButton";
import SimpleAlert from "../SimpleAlert";

const UnitDeleteButton = ({ unitId }: { unitId: number }) => {
  const { mutateAsync, isPending } = useDeleteUnit();
  return (
    <SimpleAlert
      header="Delete the item?"
      content="Are you sure to delete this item?"
      onSuccessMessage="The item was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(unitId)}
      renderTriggerButton={(onOpen) => <DeleteButton onClick={onOpen} />}
    />
  );
};

export default UnitDeleteButton;
