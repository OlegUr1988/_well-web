import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Parameter, ParameterQuery } from "../../entities/parameters";
import { parameters } from "../../services/parametersServices";

const useParameters = (query: ParameterQuery) => {
  return useQuery<Parameter[], Error>({
    queryKey: ["parameters", query],
    queryFn: () => parameters.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useParameters;
