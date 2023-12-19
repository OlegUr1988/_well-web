import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Asset, AssetQuery } from "../../entities/assets";
import { FetchResponse } from "../../services/api-client";
import { assets } from "../../services/assetsServices";

const useAssets = (query: AssetQuery) => {
  return useQuery<FetchResponse<Asset>, Error>({
    queryKey: ["assets", query],
    queryFn: () => assets.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useAssets;
