import { useMutation } from "@tanstack/react-query";
import { UpdateConstant } from "../../entities/constants";
import { updateConstant } from "../../services/constantsServices";

const useUpdateConstant = (id: string | number) => {
  return useMutation<UpdateConstant, Error, UpdateConstant>({
    mutationFn: (equipment) => updateConstant.put(id, equipment),
  });
};

export default useUpdateConstant;
