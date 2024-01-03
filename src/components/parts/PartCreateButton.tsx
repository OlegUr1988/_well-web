import { FaPlus } from "react-icons/fa";
import { useAddPart } from "../../hooks/parts";
import IconButton from "../IconButton";
import SimpleModal from "../SimpleModal";

const PartCreateButton = ({ equipmentId }: { equipmentId: number }) => {
  const { mutateAsync, isPending } = useAddPart();

  return (
    <SimpleModal
      header="Create Equipments Part"
      label="Equipments Part Name"
      submitLabel="Create"
      onSuccessMessage="The new equipment part was successfully added"
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
      mutateAsync={(data) => mutateAsync({ name: data.name, equipmentId })}
    />
  );
};

export default PartCreateButton;
