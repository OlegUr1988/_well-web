import { useQuery } from "@tanstack/react-query";
import { UtilityType } from "../entities/utilityTypes";
import APIClient from "../services/api-client";

const apiClient = new APIClient<UtilityType>("utility-types");

const useAttributeTypes = () => {
  return useQuery({
    queryKey: ["utilityTypes"],
    queryFn: apiClient.getAll,
  });
};

export default useAttributeTypes;
