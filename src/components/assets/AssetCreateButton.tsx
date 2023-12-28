import { useAddAsset } from "../../hooks/assets";
import ListViewModal from "../ListViewModal";

const AssetCreateButton = () => {
  const { mutateAsync, isPending } = useAddAsset();

  return (
    <ListViewModal
      header="Create Asset"
      label="Asset Name"
      submitLabel="Create"
      onSuccessMessage="The new asset was successfully added"
      icon="create"
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default AssetCreateButton;
