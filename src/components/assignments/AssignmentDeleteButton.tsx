import { FaRegTrashAlt } from "react-icons/fa";
import { Assignment } from "../../entities/assignments";
import { useDeleteAssignment } from "../../hooks/assignments";
import IconButton from "../IconButton";
import SimpleAlert from "../SimpleAlert";

const AssignmentDeleteButton = ({ assignment }: { assignment: Assignment }) => {
  const { mutateAsync, isPending } = useDeleteAssignment(assignment);

  return (
    <SimpleAlert
      header="Unassign the PHD Tag?"
      content="Are you sure to unassign this tag?"
      onSuccessMessage="Successfuly unassigned"
      isPending={isPending}
      mutateAsync={mutateAsync}
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

export default AssignmentDeleteButton;
