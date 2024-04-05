import { MdOutlineEdit } from "react-icons/md";
import { Asset } from "../../../entities/assets";
import { ListViewFormData } from "../../../entities/formDatas";
import { useUpdateAsset } from "../../../hooks/assets";
import { listViewFormSchema } from "../../../validationSchema";
import { SimpleModal } from "../../common";
import { IconButton } from "../../common/buttons";

const AreaEditButton = ({ area }: { area: Asset }) => {
  const { mutateAsync, isPending } = useUpdateAsset(area.id);
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
