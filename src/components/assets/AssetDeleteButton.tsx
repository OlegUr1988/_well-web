import { useDeleteAsset } from "../../hooks/assets";
import ListViewDeleteButton from "../ListViewDeleteButton";

const AssetDeleteButton = ({ assetId }: { assetId: number }) => {
  const { mutateAsync, isPending } = useDeleteAsset();

  return (
    <ListViewDeleteButton
      header="Delete the Asset?"
      content="Are you sure to delete this Asset?"
      onSuccessMessage="The asset was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(assetId)}
    />
  );
};

export default AssetDeleteButton;
