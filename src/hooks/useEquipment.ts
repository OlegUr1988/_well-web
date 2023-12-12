import { useQuery } from "@tanstack/react-query";
import Equipment from "../entities/Equipment";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Equipment>("/equipments");

const useEquipment = (id: string | number) => {
  return useQuery<Equipment, Error>({
    queryKey: ["equipments", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useEquipment;
