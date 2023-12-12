import { useMutation } from "@tanstack/react-query";
import UpdateEquipmnet from "../entities/UpdateEquipment";
import APIClient from "../services/api-client";

const apiClient = new APIClient<UpdateEquipmnet>("/equipments");

const useUpdateEquipment = (id: string | number) => {
  return useMutation<UpdateEquipmnet, Error, UpdateEquipmnet>({
    mutationFn: (equipment) => apiClient.put(id, equipment),
  });
};

export default useUpdateEquipment;
