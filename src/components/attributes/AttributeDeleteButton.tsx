import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteAttribute } from "../../hooks/attributes";
import SimpleAlert from "../SimpleAlert";
import { IconButton } from "../common/buttons";

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
        <IconButton
          onClick={onOpen}
          size="xs"
          variant="unstyled"
          icon={<FaRegTrashAlt />}
        />
      )}
    />
  );
};

export default AttributeDeleteButton;
