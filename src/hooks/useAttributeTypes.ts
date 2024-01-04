import { useQuery } from "@tanstack/react-query";
import { AttributeType } from "../entities/attributeType";
import APIClient from "../services/api-client";

const apiClient = new APIClient<AttributeType>("attribute-types");

const useAttributeTypes = () => {
  return useQuery({
    queryKey: ["attributeTypes"],
    queryFn: apiClient.getAll,
  });
};

export default useAttributeTypes;
