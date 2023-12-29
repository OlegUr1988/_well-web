import { useMutation } from "@tanstack/react-query";
import { UpdateParameter } from "../../entities/parameters";
import { updateParameter } from "../../services/parametersServices";

const useUpdatePararameter = (id: string | number) => {
  return useMutation<UpdateParameter, Error, UpdateParameter>({
    mutationFn: (equipment) => updateParameter.put(id, equipment),
  });
};

export default useUpdatePararameter;
