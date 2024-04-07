import { useQuery } from "@tanstack/react-query";
import { Asset, AssetQuery } from "../../entities/assets";
import { assets } from "../../services/assetsServices";

const useAssetsByIds = (query: AssetQuery) => {
  return useQuery<Asset[], Error>({
    queryKey: ["assets", query],
    queryFn: () => assets.getAll({ params: query }),
  });
};

export default useAssetsByIds;
