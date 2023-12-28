import { Asset } from "../../entities/assets";
import { useUpdateAsset } from "../../hooks/assets";
import ListViewModal from "../ListViewModal";

const AssetEditButton = ({ asset }: { asset: Asset }) => {
  const { mutateAsync, isPending } = useUpdateAsset(asset.id);

  return (
    <ListViewModal
      header="Edit Asset"
      label="Asset Name"
      submitLabel="Save"
      onSuccessMessage="The new asset was successfully modified"
      icon="edit"
      defaultValue={asset.name}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default AssetEditButton;
