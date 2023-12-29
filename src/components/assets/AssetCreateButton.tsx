import { useAddAsset } from "../../hooks/assets";
import ListViewCreateButton from "../ListViewCreateButton";
import SimpleModal from "../SimpleModal";

const AssetCreateButton = () => {
  const { mutateAsync, isPending } = useAddAsset();

  return (
    <SimpleModal
      header="Create Asset"
      label="Asset Name"
      submitLabel="Create"
      onSuccessMessage="The new asset was successfully added"
      renderTriggerButton={(onOpen) => (
        <ListViewCreateButton onClick={onOpen} />
      )}
      isPending={isPending}
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default AssetCreateButton;
