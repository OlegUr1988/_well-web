import { FaPlus } from "react-icons/fa";
import { ListViewFormData } from "../../../../entities/formDatas";
import { useAddAsset } from "../../../../hooks/assets";
import { listViewFormSchema } from "../../../../validationSchema";
import { IconButton } from "../../../common/buttons";
import SimpleModal from "../../SimpleModal";

const SubassetCreateButton = ({ parentAssetId }: { parentAssetId: number }) => {
  const { mutateAsync, isPending } = useAddAsset();

  return (
    <SimpleModal<ListViewFormData>
      header="Create Subasset"
      label="Subasset Name"
      submitLabel="Create"
      onSuccessMessage="The new subasset was successfully added"
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
      mutateAsync={(data) => mutateAsync({ name: data.name, parentAssetId })}
    />
  );
};

export default SubassetCreateButton;
