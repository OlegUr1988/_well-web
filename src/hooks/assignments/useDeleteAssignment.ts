import { useMutation } from "@tanstack/react-query";
import { Assignment } from "../../entities/Assignment";
import { parts } from "../../services/partsServices";

const useDeleteAssignment = (assignment: Assignment) => {
  const { partParameterId, PHDTagId } = assignment;

  return useMutation({
    mutationFn: () => parts.deleteByTwoIds(partParameterId, PHDTagId),
  });
};

export default useDeleteAssignment;
