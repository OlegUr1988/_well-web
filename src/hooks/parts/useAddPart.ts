import { useMutation } from "@tanstack/react-query";
import { AddPart } from "../../entities/parts";
import { addPart } from "../../services/partsServices";

const useAddPart = () => {
  return useMutation<AddPart, Error, AddPart>({
    mutationFn: addPart.post,
  });
};

export default useAddPart;
