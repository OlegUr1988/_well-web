import { useDeletePart } from "../../hooks/parts";
import ListViewDeleteButton from "../ListViewDeleteButton";

const PartDeleteButton = ({ partId }: { partId: number }) => {
  const { mutateAsync, isPending } = useDeletePart();

  return (
    <ListViewDeleteButton
      header="Delete the Equipments Part?"
      content="Are you sure to delete this Equipments Part?"
      onSuccessMessage="The equipments part was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(partId)}
    />
  );
};

export default PartDeleteButton;
