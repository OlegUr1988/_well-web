import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Equipment from "../entities/Equipment";
import APIClient, { FetchResponse } from "../services/api-client";
import EquipmentQuery from "../entities/EquipmentQuery";

const apiClient = new APIClient<Equipment>("/equipments");

const useEquipments = (query: EquipmentQuery) => {
  return useQuery<FetchResponse<Equipment>, Error>({
    queryKey: ["equipments", query],
    queryFn: () => apiClient.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useEquipments;
