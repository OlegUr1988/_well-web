import { useQuery } from "@tanstack/react-query";
import { Area } from "../../entities/areas";
import { areas } from "../../services/areasServices";

const useArea = (id: string | number) => {
  return useQuery<Area, Error>({
    queryKey: ["areas", id],
    queryFn: () => areas.get(id),
  });
};

export default useArea;
