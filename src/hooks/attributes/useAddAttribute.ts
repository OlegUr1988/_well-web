import { useMutation } from "@tanstack/react-query";
import { AddAttribute } from "../../entities/attributes";
import { addAttribute } from "../../services/attributesServices";

const useAddAttribute = () => {
  return useMutation<AddAttribute, Error, AddAttribute>({
    mutationFn: addAttribute.post,
  });
};

export default useAddAttribute;
