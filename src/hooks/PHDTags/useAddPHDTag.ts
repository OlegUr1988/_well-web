import { useMutation } from "@tanstack/react-query";
import { AddPHDTag } from "../../entities/PHDTags";
import { addTag } from "../../services/PHDTagsService";

const useAddPHDTag = () => {
  return useMutation<AddPHDTag, Error, AddPHDTag>({
    mutationFn: addTag.post,
  });
};

export default useAddPHDTag;
