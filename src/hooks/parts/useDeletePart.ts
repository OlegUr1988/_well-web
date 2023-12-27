import { useMutation } from "@tanstack/react-query";
import { parts } from "../../services/partsServices";

const useDeletePart = () => {
  return useMutation({
    mutationFn: (id: string | number) => parts.delete(id),
  });
};

export default useDeletePart;
