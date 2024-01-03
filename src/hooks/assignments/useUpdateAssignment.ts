import { useMutation } from "@tanstack/react-query";
import { Assignment, UpdateAssignment } from "../../entities/Assignment";
import { updateAssignment } from "../../services/assignmentsServices";

const useUpdateAssignment = (assignment: Assignment) => {
  const { partParameterId, PHDTagId } = assignment;
  return useMutation<UpdateAssignment, Error, UpdateAssignment>({
    mutationFn: (body) =>
      updateAssignment.putByTwoIds(partParameterId, PHDTagId, body),
  });
};

export default useUpdateAssignment;
