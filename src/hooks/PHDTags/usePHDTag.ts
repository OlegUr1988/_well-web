import { useQuery } from "@tanstack/react-query";
import { PHDTag } from "../../entities/PHDTags";
import { tags } from "../../services/PHDTagsService";

const usePHDTag = (id: string | number) => {
  return useQuery<PHDTag, Error>({
    queryKey: ["PHDTags", id],
    queryFn: () => tags.get(id),
  });
};

export default usePHDTag;
