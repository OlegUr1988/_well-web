import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteAsset } from "../../../hooks/assets";
import useModelStore from "../../../store/model";
import SimpleAlert from "../../common/SimpleAlert";
import { IconButton } from "../../common/buttons";

const SubassetDeleteButton = ({ assetId }: { assetId: number }) => {
  const { mutateAsync, isPending } = useDeleteAsset();
  const setSubassetId = useModelStore((s) => s.setSubassetId);

  return (
    <SimpleAlert
      header="Delete the Subasset?"
      content="Are you sure to delete this Subasset?"
      onSuccessMessage="The subasset was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(assetId)}
      onSuccess={() => setSubassetId(0)}
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

export default SubassetDeleteButton;
