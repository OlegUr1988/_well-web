import { useQuery } from "@tanstack/react-query";
import { Area, AreaQuery } from "../../entities/areas";
import { areas } from "../../services/areasServices";

const useAreas = (query: AreaQuery) => {
  return useQuery<Area, Error>({
    queryKey: ["arrea", query],
    queryFn: () => areas.getByName({ params: query }),
  });
};

export default useAreas;
