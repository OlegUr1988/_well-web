import { ListViewFormData } from "../../entities/formDatas";
import { Unit } from "../../entities/units";
import { useUpdateUnit } from "../../hooks/units";
import { listViewFormSchema } from "../../validationSchema";
import { EditButton } from "../common/buttons/";
import SimpleModal from "../SimpleModal";

const UnitEditButton = ({ unit }: { unit: Unit }) => {
  const { mutateAsync, isPending } = useUpdateUnit(unit.id);
  return (
    <SimpleModal<ListViewFormData>
      header="Edit Units"
      label="Units"
      submitLabel="Save"
      defaultValue={unit.name}
      onSuccessMessage="The item was successfully modified"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => <EditButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={mutateAsync}
    />
  );
};

export default UnitEditButton;
