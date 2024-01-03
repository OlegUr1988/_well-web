import { FaPlus } from "react-icons/fa";
import { useAddAsset } from "../../hooks/assets";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons";

const AssetCreateButton = () => {
  const { mutateAsync, isPending } = useAddAsset();

  return (
    <SimpleModal
      header="Create Asset"
      label="Asset Name"
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
      mutateAsync={(data) => mutateAsync(data)}
    />
  );
};

export default AssetCreateButton;
