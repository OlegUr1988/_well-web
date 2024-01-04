import { useMutation } from "@tanstack/react-query";
import { equipments } from "../../services/equipmentsServices";

const useDeleteEquipment = () => {
  return useMutation({
    mutationFn: (id: string | number) => equipments.delete(id),
  });
};

export default useDeleteEquipment;
