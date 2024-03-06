import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteAttribute } from "../../../hooks/attributes";
import TooltipContainer from "../../common/TooltipContainer";
import { IconButton } from "../../common/buttons";
import SimpleAlert from "../SimpleAlert";

const AttributeDeleteButton = ({ attributeId }: { attributeId: number }) => {
  const { mutateAsync, isPending } = useDeleteAttribute();
  return (
    <SimpleAlert
      header="Delete the Attribute?"
      content="Are you sure to delete this Attribute?"
      onSuccessMessage="The attribute was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(attributeId)}
      renderTriggerButton={(onOpen) => (
        <TooltipContainer label="Delete">
          <IconButton
            onClick={onOpen}
            size="xs"
            variant="unstyled"
            icon={<FaRegTrashAlt />}
          />
        </TooltipContainer>
      )}
    />
  );
};

export default AttributeDeleteButton;
