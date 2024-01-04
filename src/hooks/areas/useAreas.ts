import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Area, AreaQuery } from "../../entities/areas";
import { areas } from "../../services/areasServices";

const useAreas = (query: AreaQuery) => {
  return useQuery<Area[], Error>({
    queryKey: ["arreas", query],
    queryFn: () => areas.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useAreas;
