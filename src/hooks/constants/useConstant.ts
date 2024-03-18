import { useQuery } from "@tanstack/react-query";
import { Constant } from "../../entities/constants";
import { constants } from "../../services/constantsServices";

const useConstant = (id: string | number) => {
  return useQuery<Constant, Error>({
    queryKey: ["constatns", id],
    queryFn: () => constants.get(id),
  });
};

export default useConstant;
