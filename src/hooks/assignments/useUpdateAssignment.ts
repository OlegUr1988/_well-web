import { useMutation } from "@tanstack/react-query";
import { Assignment, UpdateAssignment } from "../../entities/Assignment";
import { updateAssignment } from "../../services/assignmentsServices";

const useUpdateAssignment = (assignment: Assignment) => {
  const { partParameterId, PHDTagId } = assignment;
  return useMutation<UpdateAssignment, Error, UpdateAssignment>({
    mutationFn: (assignmentBody) =>
      updateAssignment.putByTwoIds(partParameterId, PHDTagId, assignmentBody),
  });
};

export default useUpdateAssignment;
