import { useMutation } from "@tanstack/react-query";
import { Assignment } from "../../entities/assignments";
import { assignments } from "../../services/assignmentsServices";

const useDeleteAssignment = (assignment: Assignment) => {
  const { attributeId, PHDTagId } = assignment;

  return useMutation({
    mutationFn: () => assignments.deleteByTwoIds(attributeId, PHDTagId),
  });
};

export default useDeleteAssignment;
