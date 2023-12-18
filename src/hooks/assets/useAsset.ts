import { useQuery } from "@tanstack/react-query";
import Asset from "../../entities/Asset";
import { assets } from "../../services/assetsService";

const useAsset = (id: string | number) => {
  return useQuery<Asset, Error>({
    queryKey: ["assets", id],
    queryFn: () => assets.get(id),
  });
};

export default useAsset;
