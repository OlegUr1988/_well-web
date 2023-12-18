import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Asset from "../../entities/Asset";
import AssetQuery from "../../entities/AssetQuery";
import { FetchResponse } from "../../services/api-client";
import { assets } from "../../services/assetsService";

const useAssets = (query: AssetQuery) => {
  return useQuery<FetchResponse<Asset>, Error>({
    queryKey: ["assets", query],
    queryFn: () => assets.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useAssets;
