import { useDeleteAsset } from "../../hooks/assets";
import ListViewDeleteButton from "../ListViewDeleteButton";
import SimpleAlert from "../SimpleAlert";

const AssetDeleteButton = ({ assetId }: { assetId: number }) => {
  const { mutateAsync, isPending } = useDeleteAsset();

  return (
    <SimpleAlert
      header="Delete the Asset?"
      content="Are you sure to delete this Asset?"
      onSuccessMessage="The asset was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(assetId)}
      renderTriggerButton={(onOpen) => (
        <ListViewDeleteButton onClick={onOpen} />
      )}
    />
  );
};

export default AssetDeleteButton;
