import { useQuery } from "@tanstack/react-query";
import { Asset, AssetQuery } from "../../entities/assets";
import { assets } from "../../services/assetsServices";

const useAssetByName = (query: AssetQuery) => {
  return useQuery<Asset, Error>({
    queryKey: ["asset", query],
    queryFn: () => assets.getByName({ params: query }),
  });
};

export default useAssetByName;
