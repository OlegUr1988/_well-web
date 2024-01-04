import { useMutation } from "@tanstack/react-query";
import { Assignment, UpdateAssignment } from "../../entities/assignments";
import { updateAssignment } from "../../services/assignmentsServices";

const useUpdateAssignment = (assignment: Assignment) => {
  const { attributeId, PHDTagId } = assignment;
  return useMutation<UpdateAssignment, Error, UpdateAssignment>({
    mutationFn: (assignmentBody) =>
      updateAssignment.putByTwoIds(attributeId, PHDTagId, assignmentBody),
  });
};

export default useUpdateAssignment;
