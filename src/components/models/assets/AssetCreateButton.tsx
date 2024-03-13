import { FaPlus } from "react-icons/fa";
import { useAddAsset } from "../../../hooks/assets";
import { IconButton } from "../../common/buttons";
import AssetModal from "./AssetModal";

const AssetCreateButton = ({ areaId }: { areaId: number }) => {
  const { mutateAsync, isPending } = useAddAsset();

  return (
    <AssetModal
      parentAssetId={areaId}
      header="Create Asset"
      submitLabel="Create"
      onSuccessMessage="The new asset was successfully added"
      renderTriggerButton={(onOpen) => (
        <IconButton
          variant="outline"
          color="white"
          btnColorScheme=""
          onClick={onOpen}
          w="100%"
          icon={<FaPlus />}
        />
      )}
      isPending={isPending}
      mutateAsync={mutateAsync}
    />
  );
};

export default AssetCreateButton;
