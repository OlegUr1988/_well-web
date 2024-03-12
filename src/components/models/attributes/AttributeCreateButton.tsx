import { ListViewFormData } from "../../../entities/formDatas";
import { useAddAttribute } from "../../../hooks/attributes";
import { listViewFormSchema } from "../../../validationSchema";
import { CreateButton } from "../../common/buttons";
import SimpleModal from "../../common/SimpleModal";

const AttributeCreateButton = ({
  attributeTypeId,
  equipmentId,
}: {
  attributeTypeId: number;
  equipmentId: number;
}) => {
  const { mutateAsync, isPending } = useAddAttribute();

  return (
    <SimpleModal<ListViewFormData>
      header="Create Attribute"
      label="Attribute Name"
      submitLabel="Create"
      onSuccessMessage="The attribute was successfully added"
      schema={listViewFormSchema}
      renderTriggerButton={(onOpen) => <CreateButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({
          name: data.name,
          attributeTypeId,
          assetId: equipmentId,
        })
      }
    />
  );
};

export default AttributeCreateButton;
