import { useMutation } from "@tanstack/react-query";
import { Assignment } from "../../entities/assignments";
import { assignments } from "../../services/assignmentsServices";

const useDeleteAssignment = (assignment: Assignment) => {
  const { partParameterId, PHDTagId } = assignment;

  return useMutation({
    mutationFn: () => assignments.deleteByTwoIds(partParameterId, PHDTagId),
  });
};

export default useDeleteAssignment;
