import { useQuery } from "@tanstack/react-query";
import { Target, TargetQuery } from "../../entities/targets";
import { targets } from "../../services/targetsServices";

const useTarget = (query: TargetQuery) => {
  return useQuery<Target, Error>({
    queryKey: ["targets", query],
    queryFn: () => targets.getByParams({ params: query }),
  });
};

export default useTarget;
