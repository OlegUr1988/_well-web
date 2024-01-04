import { useMutation } from "@tanstack/react-query";
import { attributes } from "../../services/attributesServices";

const useDeleteAttribute = () => {
  return useMutation({
    mutationFn: (id: string | number) => attributes.delete(id),
  });
};

export default useDeleteAttribute;
