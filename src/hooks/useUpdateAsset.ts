import { useMutation } from "@tanstack/react-query";
import UpdateAsset from "../entities/UpdateAsset";
import APIClient from "../services/api-client";

const apiClient = new APIClient<UpdateAsset>("/assets");

const useUpdateAsset = (id: string | number) => {
  return useMutation<UpdateAsset, Error, UpdateAsset>({
    mutationFn: (asset) => apiClient.put(id, asset),
  });
};

export default useUpdateAsset;
