import { MdOutlineEdit } from "react-icons/md";
import { Attribute } from "../../../entities/attributes";
import { ListViewFormData } from "../../../entities/formDatas";
import { useUpdateAttribute } from "../../../hooks/attributes";
import { listViewFormSchema } from "../../../validationSchema";
import TooltipContainer from "../../common/TooltipContainer";
import { IconButton } from "../../common/buttons";
import SimpleModal from "../../common/SimpleModal";

const AttributeEditButton = ({ attribute }: { attribute: Attribute }) => {
  const { mutateAsync, isPending } = useUpdateAttribute(attribute.id);
  return (
    <SimpleModal<ListViewFormData>
      header="Edit Attribute"
      label="Attribute Name"
      submitLabel="Save"
      onSuccessMessage="The attribute was successfully modified"
      schema={listViewFormSchema}
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
          assetId: attribute.assetId,
        })
      }
    />
  );
};

export default AttributeEditButton;
