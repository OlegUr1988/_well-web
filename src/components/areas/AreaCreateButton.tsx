import { FaPlus } from "react-icons/fa";
import { useAddArea } from "../../hooks/areas";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons";
import { ListViewFormData } from "../../entities/formDatas";
import { listViewFormSchema } from "../../validationSchema";

const AreaCreateButton = () => {
  const { mutateAsync, isPending } = useAddArea();

  return (
    <SimpleModal<ListViewFormData>
      header="Create Area"
      label="Area Name"
      submitLabel="Create"
      onSuccessMessage="The new area was successfully added"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => (
        <IconButton
          variant="outline"
          color="white"
          btnColorScheme=""
          onClick={onOpen}
          w="100%"
          icon={<FaPlus />}
        />
      )}
      isPending={isPending}
      mutateAsync={mutateAsync}
    />
  );
};

export default AreaCreateButton;
