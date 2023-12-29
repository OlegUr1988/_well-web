import { useQuery } from "@tanstack/react-query";
import { Parameter } from "../../entities/parameters";
import { parameters } from "../../services/parametersServices";

const useParameter = (id: string | number) => {
  return useQuery<Parameter, Error>({
    queryKey: ["parts", id],
    queryFn: () => parameters.get(id),
  });
};

export default useParameter;
