import { FaRegTrashAlt } from "react-icons/fa";
import { useDeletePart } from "../../hooks/parts";
import IconEditButton from "../IconButton";
import SimpleAlert from "../SimpleAlert";

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

export default PartDeleteButton;
