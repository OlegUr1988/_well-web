import { useMutation } from "@tanstack/react-query";
import UpdateEquipmnet from "../../entities/UpdateEquipment";
import { updateEquipment } from "../../services/equipmentsServices";

const useUpdateEquipment = (id: string | number) => {
  return useMutation<UpdateEquipmnet, Error, UpdateEquipmnet>({
    mutationFn: (equipment) => updateEquipment.put(id, equipment),
  });
};

export default useUpdateEquipment;
