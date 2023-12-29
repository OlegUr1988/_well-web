import { useMutation } from "@tanstack/react-query";
import { parameters } from "../../services/parametersServices";

const useDeleteParameter = () => {
  return useMutation({
    mutationFn: (id: string | number) => parameters.delete(id),
  });
};

export default useDeleteParameter;
