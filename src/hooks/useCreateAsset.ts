import { useMutation } from "@tanstack/react-query";
import CreateAsset from "../entities/CreateAsset";
import APIClient from "../services/api-client";

const apiClient = new APIClient<CreateAsset>("/assets");

const useCreateAsset = () => {
  return useMutation<CreateAsset, Error, CreateAsset>({
    mutationFn: apiClient.createAsset,
  });
};

export default useCreateAsset;
