import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PHDTag, PHDTagQuery } from "../../entities/PHDTags";
import { tags } from "../../services/PHDTagsService";
import { FetchResponse } from "../../services/api-client";

const usePHDTags = (query: PHDTagQuery) => {
  return useQuery<FetchResponse<PHDTag>, Error>({
    queryKey: ["PHDTags", query],
    queryFn: () => tags.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default usePHDTags;
