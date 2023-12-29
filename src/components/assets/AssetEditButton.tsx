import { Asset } from "../../entities/assets";
import { useUpdateAsset } from "../../hooks/assets";
import ListViewEditButton from "../ListViewEditButton";
import SimpleModal from "../SimpleModal";

const AssetEditButton = ({ asset }: { asset: Asset }) => {
  const { mutateAsync, isPending } = useUpdateAsset(asset.id);

  return (
    <SimpleModal
      header="Edit Asset"
      label="Asset Name"
      submitLabel="Save"
      onSuccessMessage="The new asset was successfully modified"
      renderTriggerButton={(onOpen) => <ListViewEditButton onClick={onOpen} />}
      defaultValue={asset.name}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default AssetEditButton;
