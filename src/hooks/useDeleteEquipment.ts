import { useMutation } from "@tanstack/react-query";
import Equipment from "../entities/Equipment";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Equipment>("/equipments");

const useDeleteEquipment = () => {
  return useMutation({
    mutationFn: (id: string | number) => apiClient.delete(id),
  });
};

export default useDeleteEquipment;
