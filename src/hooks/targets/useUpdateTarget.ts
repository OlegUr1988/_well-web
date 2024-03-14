import { useMutation } from "@tanstack/react-query";
import { UpdateTarget } from "../../entities/targets";
import { updateTarget } from "../../services/targetsServices";

const useUpdateTarget = (id: string | number) => {
  return useMutation<UpdateTarget, Error, UpdateTarget>({
    mutationFn: (target) => updateTarget.put(id, target),
  });
};

export default useUpdateTarget;
