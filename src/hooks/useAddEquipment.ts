import { useMutation } from "@tanstack/react-query";
import AddEquipment from "../entities/AddEquipment";
import APIClient from "../services/api-client";

const apiClient = new APIClient<AddEquipment>("/equipments");

const useAddEquipment = () => {
  return useMutation<AddEquipment, Error, AddEquipment>({
    mutationFn: apiClient.post,
  });
};

export default useAddEquipment;
