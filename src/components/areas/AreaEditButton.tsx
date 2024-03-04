import { MdOutlineEdit } from "react-icons/md";
import { Area } from "../../entities/areas";
import { ListViewFormData } from "../../entities/formDatas";
import { useUpdateArea } from "../../hooks/areas";
import { listViewFormSchema } from "../../validationSchema";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons";

const AreaEditButton = ({ area }: { area: Area }) => {
  const { mutateAsync, isPending } = useUpdateArea(area.id);

  return (
    <SimpleModal<ListViewFormData>
      header="Edit Area"
      label="Area Name"
      submitLabel="Save"
      onSuccessMessage="The area was successfully modified"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          btnColorScheme="gray"
          icon={<MdOutlineEdit color="white" />}
        />
      )}
      defaultValue={area.name}
      isPending={isPending}
      mutateAsync={mutateAsync}
    />
  );
};

export default AreaEditButton;
