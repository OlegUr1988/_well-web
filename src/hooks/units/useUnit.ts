import { useQuery } from "@tanstack/react-query";
import { Unit } from "../../entities/units";
import { units } from "../../services/unitsServices";

const useUnit = (id: string | number) => {
  return useQuery<Unit, Error>({
    queryKey: ["units", id],
    queryFn: () => units.get(id),
  });
};

export default useUnit;
