import { MdOutlineEdit } from "react-icons/md";
import { Asset } from "../../../entities/assets";
import { ListViewFormData } from "../../../entities/formDatas";
import { useUpdateAsset } from "../../../hooks/assets";
import { listViewFormSchema } from "../../../validationSchema";
import SimpleModal from "../../common/SimpleModal";
import { IconButton } from "../../common/buttons";

const PlantEditButton = ({ plant }: { plant: Asset }) => {
  const { mutateAsync, isPending } = useUpdateAsset(plant.id);
  return (
    <SimpleModal<ListViewFormData>
      header="Edit Plant"
      label="Plant Name"
      submitLabel="Save"
      onSuccessMessage="The plant was successfully modified"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<MdOutlineEdit color="white" />}
        />
      )}
      defaultValue={plant.name}
      isPending={isPending}
      mutateAsync={mutateAsync}
    />
  );
};

export default PlantEditButton;
