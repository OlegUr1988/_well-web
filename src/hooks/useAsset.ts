import { useQuery } from "@tanstack/react-query";
import Asset from "../entities/Asset";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Asset>("/assets");

const useAsset = (id: string | number) => {
  return useQuery<Asset, Error>({
    queryKey: ["assets", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useAsset;
