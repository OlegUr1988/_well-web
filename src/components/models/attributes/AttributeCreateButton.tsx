import { ListViewFormData } from "../../../entities/formDatas";
import { useAddAttribute } from "../../../hooks/attributes";
import { listViewFormSchema } from "../../../validationSchema";
import { SimpleModal } from "../../common";
import { CreateButton } from "../../common/buttons";

const AttributeCreateButton = ({
  attributeTypeId,
  assetId,
}: {
  attributeTypeId: number;
  assetId: number;
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
          assetId,
        })
      }
    />
  );
};

export default AttributeCreateButton;
