import { MdOutlineEdit } from "react-icons/md";
import { Asset } from "../../../entities/assets";
import { ListViewFormData } from "../../../entities/formDatas";
import { useUpdateAsset } from "../../../hooks/assets";
import { listViewFormSchema } from "../../../validationSchema";
import { SimpleModal } from "../../common";
import { IconButton } from "../../common/buttons";

const SubassetEditButton = ({ asset }: { asset: Asset }) => {
  const { mutateAsync, isPending } = useUpdateAsset(asset.id);

  return (
    <SimpleModal<ListViewFormData>
      header="Edit Subasset"
      label="Subasset Name"
      submitLabel="Save"
      defaultValue={asset.name}
      onSuccessMessage="The subasset was successfully modified"
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
      mutateAsync={(data) => mutateAsync({ name: data.name })}
    />
  );
};

export default SubassetEditButton;
