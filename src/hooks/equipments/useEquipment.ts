import { useQuery } from "@tanstack/react-query";
import { Equipment } from "../../entities/equipments";
import { equipments } from "../../services/equipmentsServices";

const useEquipment = (id: string | number) => {
  return useQuery<Equipment, Error>({
    queryKey: ["equipments", id],
    queryFn: () => equipments.get(id),
  });
};

export default useEquipment;
