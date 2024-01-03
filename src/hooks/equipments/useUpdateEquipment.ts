import { useMutation } from "@tanstack/react-query";
import { UpdateEquipment } from "../../entities/equipments";
import { updateEquipment } from "../../services/equipmentsServices";

const useUpdateEquipment = (id: string | number) => {
  return useMutation<UpdateEquipment, Error, UpdateEquipment>({
    mutationFn: (equipment) => updateEquipment.put(id, equipment),
  });
};

export default useUpdateEquipment;
