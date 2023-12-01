import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Asset from "../entities/Asset";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Asset>("/assets");

export interface AssetQuery {
  page?: number;
  pageSize?: number;
  searchedName?: string
}

const useAssets = (query: AssetQuery) => {
  return useQuery<FetchResponse<Asset>, Error>({
    queryKey: ["assets", query],
    queryFn: () => apiClient.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useAssets;
