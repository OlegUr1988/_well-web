import { useMutation } from "@tanstack/react-query";
import { UpdateParameter } from "../../entities/parameters";
import { updateParameter } from "../../services/parametersServices";

const useUpdatePararameter = (id: string | number) => {
  return useMutation<UpdateParameter, Error, UpdateParameter>({
    mutationFn: (parameter) => updateParameter.put(id, parameter),
  });
};

export default useUpdatePararameter;
