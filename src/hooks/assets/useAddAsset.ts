import { useMutation } from "@tanstack/react-query";
import AddAsset from "../../entities/AddAsset";
import { addAsset } from "../../services/assetsServices";

const useAddAsset = () => {
  return useMutation<AddAsset, Error, AddAsset>({
    mutationFn: addAsset.post,
  });
};

export default useAddAsset;
