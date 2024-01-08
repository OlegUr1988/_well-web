import { MdOutlineEdit } from "react-icons/md";
import { Attribute } from "../../entities/attributes";
import { useUpdateAttribute } from "../../hooks/attributes";
import SimpleModal from "../SimpleModal";
import TooltipContainer from "../common/TooltipContainer";
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
        <TooltipContainer label="Edit">
          <IconButton
            onClick={onOpen}
            size="xs"
            variant="unstyled"
            icon={<MdOutlineEdit />}
          />
        </TooltipContainer>
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
