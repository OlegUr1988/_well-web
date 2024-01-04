import { useMutation } from "@tanstack/react-query";
import { AddEquipment } from "../../entities/equipments";
import { addEquipment } from "../../services/equipmentsServices";

const useAddEquipment = () => {
  return useMutation<AddEquipment, Error, AddEquipment>({
    mutationFn: addEquipment.post,
  });
};

export default useAddEquipment;
