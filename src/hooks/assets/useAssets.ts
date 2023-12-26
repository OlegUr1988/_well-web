import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Asset, AssetQuery } from "../../entities/assets";
import { assets } from "../../services/assetsServices";

const useAssets = (query: AssetQuery) => {
  return useQuery<Asset[], Error>({
    queryKey: ["assets", query],
    queryFn: () => assets.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useAssets;
