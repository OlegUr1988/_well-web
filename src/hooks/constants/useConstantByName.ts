import { useQuery } from "@tanstack/react-query";
import { Constant } from "../../entities/constants";
import { constants } from "../../services/constantsServices";

const useConstantByName = (name: string) => {
  return useQuery<Constant, Error>({
    queryKey: ["constatns", name],
    queryFn: () => constants.get(name),
  });
};

export default useConstantByName;
