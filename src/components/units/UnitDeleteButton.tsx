import { useDeleteUnit, useUnits } from "../../hooks/units";
import useUnitsStore from "../../store/unitsStore";
import DeleteButton from "../DeleteButton";
import SimpleAlert from "../SimpleAlert";

const UnitDeleteButton = ({ unitId }: { unitId: number }) => {
  const { mutateAsync, isPending } = useDeleteUnit();

  const { page, pageSize } = useUnitsStore((s) => s.unitsQuery);
  const { data: units } = useUnits({ page, pageSize });
  const setPage = useUnitsStore((s) => s.setPage);

  const handlePagination = () => {
    if (units?.results.length === 1 && page! > 1) setPage(page! - 1);
  };

  return (
    <SimpleAlert
      header="Delete the item?"
      content="Are you sure to delete this item?"
      onSuccessMessage="The item was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(unitId)}
      onSuccess={handlePagination}
      renderTriggerButton={(onOpen) => <DeleteButton onClick={onOpen} />}
    />
  );
};

export default UnitDeleteButton;
