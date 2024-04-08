import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { UtilityType } from "../entities/utilityTypes";
import APIClient from "../services/api-client";

const apiClient = new APIClient<UtilityType>("utility-types");

const useUtilityTypes = () => {
  return useQuery({
    queryKey: ["utilityTypes"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useUtilityTypes;
