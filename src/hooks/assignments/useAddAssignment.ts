import { useMutation } from "@tanstack/react-query";
import { AddAssignment } from "../../entities/Assignments";
import { addAssignment } from "../../services/assignmentsServices";

const useAddAssignment = () => {
  return useMutation<AddAssignment, Error, AddAssignment>({
    mutationFn: addAssignment.post,
  });
};

export default useAddAssignment;
