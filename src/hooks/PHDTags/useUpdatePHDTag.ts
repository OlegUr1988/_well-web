import { useMutation } from "@tanstack/react-query";
import { UpdatePHDTag } from "../../entities/PHDTags";
import { updateTag } from "../../services/PHDTagsService";

const useUpdateAsset = (id: string | number) => {
  return useMutation<UpdatePHDTag, Error, UpdatePHDTag>({
    mutationFn: (asset) => updateTag.put(id, asset),
  });
};

export default useUpdateAsset;
