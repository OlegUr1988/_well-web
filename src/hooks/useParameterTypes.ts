import { useQuery } from "@tanstack/react-query";
import ParameterType from "../entities/ParameterType";
import APIClient from "../services/api-client";

const apiClient = new APIClient<ParameterType>("parameter-types");

const useParameterType = () => {
  return useQuery({
    queryKey: ["parameterTypes"],
    queryFn: apiClient.getAll,
  });
};

export default useParameterType;
