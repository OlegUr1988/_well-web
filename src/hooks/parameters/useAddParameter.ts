import { useMutation } from "@tanstack/react-query";
import { AddParameter } from "../../entities/parameters";
import { addParameter } from "../../services/parametersServices";

const useAddParameter = () => {
  return useMutation<AddParameter, Error, AddParameter>({
    mutationFn: addParameter.post,
  });
};

export default useAddParameter;
