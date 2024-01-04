import { useMutation } from "@tanstack/react-query";
import { UpdateAttribute } from "../../entities/attributes";
import { updateAttribute } from "../../services/attributesServices";

const useUpdateAttribute = (id: string | number) => {
  return useMutation<UpdateAttribute, Error, UpdateAttribute>({
    mutationFn: (parameter) => updateAttribute.put(id, parameter),
  });
};

export default useUpdateAttribute;
