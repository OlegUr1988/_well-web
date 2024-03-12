import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteAsset } from "../../../../hooks/assets";
import useModelStore from "../../../../store/model";
import { IconButton } from "../../../common/buttons";
import SimpleAlert from "../../SimpleAlert";

const AreaDeleteButton = ({ areaId }: { areaId: number }) => {
  const { mutateAsync, isPending } = useDeleteAsset();
  const setAreaId = useModelStore((s) => s.setAreaId);

  return (
    <SimpleAlert
      header="Delete the Area?"
      content="Are you sure to delete this Area?"
      onSuccessMessage="The area was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(areaId)}
      onSuccess={() => setAreaId(0)}
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

export default AreaDeleteButton;
