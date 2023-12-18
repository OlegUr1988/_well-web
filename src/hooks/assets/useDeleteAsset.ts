import { useMutation } from "@tanstack/react-query";
import { assets } from "../../services/assetsService";

const useDeleteAsset = () => {
  return useMutation({
    mutationFn: (id: string | number) => assets.delete(id),
  });
};

export default useDeleteAsset;
