import { FaPlus } from "react-icons/fa";
import { ListViewFormData } from "../../../entities/formDatas";
import { useAddAsset } from "../../../hooks/assets";
import { listViewFormSchema } from "../../../validationSchema";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../../common/buttons";

const AssetCreateButton = ({ areaId }: { areaId: number }) => {
  const { mutateAsync, isPending } = useAddAsset();

  return (
    <SimpleModal<ListViewFormData>
      header="Create Asset"
      label="Asset Name"
      submitLabel="Create"
      onSuccessMessage="The new asset was successfully added"
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
      mutateAsync={(data) => mutateAsync({ name: data.name, areaId })}
    />
  );
};

export default AssetCreateButton;
