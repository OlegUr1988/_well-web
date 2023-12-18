import { useMutation } from "@tanstack/react-query";
import UpdateAsset from "../../entities/UpdateAsset";
import { updateAsset } from "../../services/assetsService";

const useUpdateAsset = (id: string | number) => {
  return useMutation<UpdateAsset, Error, UpdateAsset>({
    mutationFn: (asset) => updateAsset.put(id, asset),
  });
};

export default useUpdateAsset;
