import { MdOutlineEdit } from "react-icons/md";
import { Attribute } from "../../entities/attributes";
import { useUpdateAttribute } from "../../hooks/attributes";
import SimpleModal from "../SimpleModal";
import { IconButton } from "../common/buttons";

const AttributeEditButton = ({ attribute }: { attribute: Attribute }) => {
  const { mutateAsync, isPending } = useUpdateAttribute(attribute.id);
  return (
    <SimpleModal
      header="Edit Attribute"
      label="Attribute Name"
      submitLabel="Save"
      onSuccessMessage="The attribute was successfully modified"
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          variant="unstyled"
          icon={<MdOutlineEdit />}
        />
      )}
      defaultValue={attribute.name}
      isPending={isPending}
      mutateAsync={(data) =>
        mutateAsync({
          name: data.name,
          attributeTypeId: attribute.attributeTypeId,
          equipmentId: attribute.equipmentId,
        })
      }
    />
  );
};

export default AttributeEditButton;
