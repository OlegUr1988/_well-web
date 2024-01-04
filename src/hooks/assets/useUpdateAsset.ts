import { useMutation } from "@tanstack/react-query";
import { UpdateAsset } from "../../entities/assets";
import { updateAsset } from "../../services/assetsServices";

const useUpdateAsset = (id: string | number) => {
  return useMutation<UpdateAsset, Error, UpdateAsset>({
    mutationFn: (equipment) => updateAsset.put(id, equipment),
  });
};

export default useUpdateAsset;
