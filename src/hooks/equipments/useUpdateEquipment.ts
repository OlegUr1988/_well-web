import { useMutation } from "@tanstack/react-query";
import { UpdateEquipment } from "../../entities/equipments";
import { updateEquipment } from "../../services/equipmentsServices";

const useUpdateEquipment = (id: string | number) => {
  return useMutation<UpdateEquipment, Error, UpdateEquipment>({
    mutationFn: (part) => updateEquipment.put(id, part),
  });
};

export default useUpdateEquipment;
