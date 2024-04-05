import { ListViewFormData } from "../../../entities/formDatas";
import { useAddUnit } from "../../../hooks/units";
import { listViewFormSchema } from "../../../validationSchema";
import { SimpleModal } from "../../common";
import { CreateButton } from "../../common/buttons";

const UnitsCreateButton = () => {
  const { mutateAsync, isPending } = useAddUnit();

  return (
    <SimpleModal<ListViewFormData>
      header="Create Units"
      label="Units"
      submitLabel="Create"
      onSuccessMessage="The new item was successfully added"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => <CreateButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={mutateAsync}
    />
  );
};

export default UnitsCreateButton;
