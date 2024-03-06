import { MdOutlineEdit } from "react-icons/md";
import { Equipment } from "../../../entities/equipments";
import { useUpdateEquipment } from "../../../hooks/equipments";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../../common/buttons";
import { ListViewFormData } from "../../../entities/formDatas";
import { listViewFormSchema } from "../../../validationSchema";

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
