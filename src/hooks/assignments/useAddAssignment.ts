import { useMutation } from "@tanstack/react-query";
import { AddAssignment } from "../../entities/assignments";
import { addAssignment } from "../../services/assignmentsServices";

const useAddAssignment = () => {
  return useMutation<AddAssignment, Error, AddAssignment>({
    mutationFn: addAssignment.post,
  });
};

export default useAddAssignment;
