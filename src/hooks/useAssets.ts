import { useQuery } from "@tanstack/react-query";
import Asset from "../entities/Asset";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Asset>("/assets");

const useAssets = () => {
  return useQuery<Asset[], Error>({
    queryKey: ["assets"],
    queryFn: apiClient.getAll,
  });
};

export default useAssets;
