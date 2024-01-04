import { FaPlus } from "react-icons/fa";
import { useAddAssignment } from "../../hooks/assignments";
import { IconButton } from "../common/buttons";
import AssignmentModal from "./AssignmentModal";

const AssignmentCreateButton = ({ attributeId }: { attributeId: number }) => {
  const { mutateAsync, isPending } = useAddAssignment();
  return (
    <AssignmentModal
      attributeId={attributeId}
      header="Assign PHD Tag"
      onSuccessMessage="A PHD Tag was successfuly assigned"
      submitLabel="Assign"
      isPending={isPending}
      mutateAsync={mutateAsync}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          variant="unstyled"
          icon={<FaPlus />}
        />
      )}
    />
  );
};

export default AssignmentCreateButton;
