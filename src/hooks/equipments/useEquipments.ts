import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Equipment, EquipmentQuery } from "../../entities/equipments";
import { equipments } from "../../services/equipmentsServices";

const useEquipments = (query: EquipmentQuery) => {
  return useQuery<Equipment[], Error>({
    queryKey: ["equipments", query],
    queryFn: () => equipments.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useEquipments;
