import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteAsset } from "../../../hooks/assets";
import useModelStore from "../../../store/model";
import SimpleAlert from "../../common/SimpleAlert";
import { IconButton } from "../../common/buttons";

const PlantDeleteButton = ({ plantId }: { plantId: number }) => {
  const { mutateAsync, isPending } = useDeleteAsset();
  const setPlantId = useModelStore((s) => s.setPlantId);

  return (
    <SimpleAlert
      header="Delete the Plant?"
      content="Are you sure to delete this Plant?"
      onSuccessMessage="The plant was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(plantId)}
      onSuccess={() => setPlantId(0)}
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

export default PlantDeleteButton;
