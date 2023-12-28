import { useMutation } from "@tanstack/react-query";
import { units } from "../../services/unitsServices";

const useDeleteUnit = () => {
  return useMutation({
    mutationFn: (id: string | number) => units.delete(id),
  });
};

export default useDeleteUnit;
