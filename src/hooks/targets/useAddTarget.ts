import { useMutation } from "@tanstack/react-query";
import { AddTarget } from "../../entities/targets";
import { addTarget } from "../../services/targetsServices";

const useAddTarget = () => {
  return useMutation<AddTarget, Error, AddTarget>({
    mutationFn: addTarget.post,
  });
};

export default useAddTarget;
