import { useQuery } from "@tanstack/react-query";
import Equipment from "../entities/Equipment";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Equipment>("/equipments");

const useEquipments = () => {
  return useQuery<FetchResponse<Equipment>, Error>({
    queryKey: ["equipments"],
    queryFn: apiClient.getAll,
  });
};

export default useEquipments;
