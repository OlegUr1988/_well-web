import { MdOutlineEdit } from "react-icons/md";
import { Equipment } from "../../../entities/equipments";
import { ListViewFormData } from "../../../entities/formDatas";
import { useUpdateEquipment } from "../../../hooks/equipments";
import { listViewFormSchema } from "../../../validationSchema";
import { IconButton } from "../../common/buttons";
import SimpleModal from "../SimpleModal";

const EquipmentEditButton = ({ equipment }: { equipment: Equipment }) => {
  const { mutateAsync, isPending } = useUpdateEquipment(equipment.id);

  return (
    <SimpleModal<ListViewFormData>
      header="Edit Equipment"
      label="Equipment Name"
      submitLabel="Save"
      defaultValue={equipment.name}
      onSuccessMessage="The equipment was successfully modified"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<MdOutlineEdit color="white" />}
        />
      )}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({ name: data.name, assetId: equipment.assetId })
      }
    />
  );
};

export default EquipmentEditButton;
