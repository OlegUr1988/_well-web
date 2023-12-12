import { useMutation } from "@tanstack/react-query";
import AddAsset from "../entities/CreateAsset";
import APIClient from "../services/api-client";

const apiClient = new APIClient<AddAsset>("/assets");

const useAddAsset = () => {
  return useMutation<AddAsset, Error, AddAsset>({
    mutationFn: apiClient.post,
  });
};

export default useAddAsset;
