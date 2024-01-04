import { useMutation } from "@tanstack/react-query";
import { AddArea } from "../../entities/areas";
import { addArea } from "../../services/areasServices";

const useAddArea = () => {
  return useMutation<AddArea, Error, AddArea>({
    mutationFn: addArea.post,
  });
};

export default useAddArea;
