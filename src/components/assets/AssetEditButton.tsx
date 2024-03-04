import { MdOutlineEdit } from "react-icons/md";
import { Asset } from "../../entities/assets";
import { useUpdateAsset } from "../../hooks/assets";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons";
import { ListViewFormData } from "../../entities/formDatas";
import { listViewFormSchema } from "../../validationSchema";

const AssetEditButton = ({ asset }: { asset: Asset }) => {
  const { mutateAsync, isPending } = useUpdateAsset(asset.id);

  return (
    <SimpleModal<ListViewFormData>
      header="Edit Asset"
      label="Asset Name"
      submitLabel="Save"
      onSuccessMessage="The asset was successfully modified"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<MdOutlineEdit color="white" />}
        />
      )}
      defaultValue={asset.name}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, areaId: asset.areaId })
      }
    />
  );
};

export default AssetEditButton;
