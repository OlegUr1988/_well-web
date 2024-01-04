import { useAddAttribute } from "../../hooks/attributes";
import { CreateButton } from "../common/buttons";
import SimpleModal from "../SimpleModal";

const AttributeCreateButton = ({
  attributeTypeId,
  equipmentId,
}: {
  attributeTypeId: number;
  equipmentId: number;
}) => {
  const { mutateAsync, isPending } = useAddAttribute();

  return (
    <SimpleModal
      header="Create Attribute"
      label="Attribute Name"
      submitLabel="Create"
      onSuccessMessage="The attribute was successfully added"
      renderTriggerButton={(onOpen) => <CreateButton onClick={onOpen} />}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({
          name: data.name,
          attributeTypeId,
          equipmentId,
        })
      }
    />
  );
};

export default AttributeCreateButton;
