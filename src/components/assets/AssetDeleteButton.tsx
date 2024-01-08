import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteAsset } from "../../hooks/assets";
import useModelStore from "../../store/model";
import SimpleAlert from "../SimpleAlert";
import { IconButton } from "../common/buttons";

const AssetDeleteButton = ({ assetId }: { assetId: number }) => {
  const { mutateAsync, isPending } = useDeleteAsset();
  const setAssetId = useModelStore((s) => s.setAssetId);

  return (
    <SimpleAlert
      header="Delete the Asset?"
      content="Are you sure to delete this Asset?"
      onSuccessMessage="The asset was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(assetId)}
      onSuccess={() => setAssetId(0)}
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
