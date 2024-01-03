import { useMutation } from "@tanstack/react-query";
import { UpdatePart } from "../../entities/parts";
import { updatePart } from "../../services/partsServices";

const useUpdatePart = (id: string | number) => {
  return useMutation<UpdatePart, Error, UpdatePart>({
    mutationFn: (part) => updatePart.put(id, part),
  });
};

export default useUpdatePart;
