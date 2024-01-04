import { MdOutlineEdit } from "react-icons/md";
import { Assignment } from "../../entities/assignments";
import { useUpdateAssignment } from "../../hooks/assignments";
import { IconButton } from "../common/buttons";
import AssignmentModal from "./AssignmentModal";

const AssignmentEditButton = ({ assignment }: { assignment: Assignment }) => {
  const { mutateAsync, isPending } = useUpdateAssignment(assignment);

  return (
    <AssignmentModal
      attributeId={assignment.attributeId}
      header="Assign PHD Tag"
      onSuccessMessage="A PHD Tag was successfuly assigned"
      submitLabel="Assign"
      isPending={isPending}
      mutateAsync={mutateAsync}
      defaultPHDTag={assignment}
      renderTriggerButton={(onOpen) => (
        <IconButton
          onClick={onOpen}
          size="xs"
          variant="unstyled"
          icon={<MdOutlineEdit />}
        />
      )}
    />
  );
};

export default AssignmentEditButton;
