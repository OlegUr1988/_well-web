import { FaPlus } from "react-icons/fa";
import { ListViewFormData } from "../../../../entities/formDatas";
import { useAddAsset } from "../../../../hooks/assets";
import { listViewFormSchema } from "../../../../validationSchema";
import IconButton from "../../../common/buttons/IconButton";
import SimpleModal from "../../SimpleModal";

const AreaCreateButton = () => {
  const { mutateAsync, isPending } = useAddAsset();
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
