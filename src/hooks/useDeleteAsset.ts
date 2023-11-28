import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Asset from "../entities/Asset";

const apiClient = new APIClient<Asset>("/assets");

const useDeleteAsset = () => {
  return useMutation({
    mutationFn: (id: string | number) => apiClient.delete(id),
  });
};

export default useDeleteAsset;
