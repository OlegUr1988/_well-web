import { useDeletePart } from "../../hooks/parts";
import ListViewDeleteButton from "../ListViewDeleteButton";
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
        <ListViewDeleteButton onClick={onOpen} />
      )}
    />
  );
};

export default PartDeleteButton;
