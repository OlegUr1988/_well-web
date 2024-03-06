import { FaPlus } from "react-icons/fa";
import { ListViewFormData } from "../../../entities/formDatas";
import { useAddEquipment } from "../../../hooks/equipments";
import { listViewFormSchema } from "../../../validationSchema";
import { IconButton } from "../../common/buttons";
import SimpleModal from "../SimpleModal";

const EquipmentCreateButton = ({ assetId }: { assetId: number }) => {
  const { mutateAsync, isPending } = useAddEquipment();

  return (
    <SimpleModal<ListViewFormData>
      header="Create Equipment"
      label="Equipment Name"
      submitLabel="Create"
      onSuccessMessage="The new equipment was successfully added"
      schema={listViewFormSchema}
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
      mutateAsync={(data) => mutateAsync({ name: data.name, assetId })}
    />
  );
};

export default EquipmentCreateButton;
