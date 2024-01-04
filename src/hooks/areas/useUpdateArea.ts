import { useMutation } from "@tanstack/react-query";
import { UpdateArea } from "../../entities/areas";
import { updateArea } from "../../services/areasServices";

const useUpdateArea = (id: string | number) => {
  return useMutation<UpdateArea, Error, UpdateArea>({
    mutationFn: (asset) => updateArea.put(id, asset),
  });
};

export default useUpdateArea;
