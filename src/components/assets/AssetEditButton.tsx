import { MdOutlineEdit } from "react-icons/md";
import { Asset } from "../../entities/assets";
import { useUpdateAsset } from "../../hooks/assets";
import IconButton from "../IconButton";
import SimpleModal from "../SimpleModal";

const AssetEditButton = ({ asset }: { asset: Asset }) => {
  const { mutateAsync, isPending } = useUpdateAsset(asset.id);

  return (
    <SimpleModal
      header="Edit Asset"
      label="Asset Name"
      submitLabel="Save"
      onSuccessMessage="The asset was successfully modified"
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColor="gray"
          icon={<MdOutlineEdit color="white" />}
        />
      )}
      defaultValue={asset.name}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default AssetEditButton;
