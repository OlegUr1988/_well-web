import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteAsset } from "../../hooks/assets";
import SimpleAlert from "../SimpleAlert";
import { IconButton } from "../common/buttons";

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
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<FaRegTrashAlt color="white" />}
        />
      )}
    />
  );
};

export default AssetDeleteButton;
