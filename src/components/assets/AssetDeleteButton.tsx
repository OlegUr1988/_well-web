import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteAsset } from "../../hooks/assets";
import IconEditButton from "../IconButton";
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
        <IconEditButton
          onClick={onOpen}
          size="xs"
          btnColor="gray"
          icon={<FaRegTrashAlt color="white" />}
        />
      )}
    />
  );
};

export default AssetDeleteButton;
