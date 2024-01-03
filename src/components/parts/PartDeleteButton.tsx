import { FaRegTrashAlt } from "react-icons/fa";
import { useDeletePart } from "../../hooks/parts";
import SimpleAlert from "../SimpleAlert";
import { IconButton } from "../common/buttons/";

const PartDeleteButton = ({ partId }: { partId: number }) => {
  const { mutateAsync, isPending } = useDeletePart();

  return (
    <SimpleAlert
      header="Delete the Equipments Part?"
      content="Are you sure to delete this Equipments Part?"
      onSuccessMessage="The equipments part was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(partId)}
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

export default PartDeleteButton;
