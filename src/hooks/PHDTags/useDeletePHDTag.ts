import { useMutation } from "@tanstack/react-query";
import { tags } from "../../services/PHDTagsService";

const useDeletePHDTag = () => {
  return useMutation({
    mutationFn: (id: string | number) => tags.delete(id),
  });
};

export default useDeletePHDTag;
