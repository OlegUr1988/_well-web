import { FaPlus } from "react-icons/fa";
import { useAddAssignment } from "../../../hooks/assignments";
import { TooltipContainer } from "../../common";
import { IconButton } from "../../common/buttons";
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
        <TooltipContainer label="Assign a tag">
          <IconButton
            onClick={onOpen}
            size="xs"
            variant="unstyled"
            icon={<FaPlus />}
          />
        </TooltipContainer>
      )}
    />
  );
};

export default AssignmentCreateButton;
