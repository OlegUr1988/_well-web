import { useMutation } from "@tanstack/react-query";
import { UpdatePart } from "../../entities/parts";
import { updatePart } from "../../services/partsServices";

const useUpdatePart = (id: string | number) => {
  return useMutation<UpdatePart, Error, UpdatePart>({
    mutationFn: (equipment) => updatePart.put(id, equipment),
  });
};

export default useUpdatePart;
