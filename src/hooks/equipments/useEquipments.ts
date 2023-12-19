import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Equipment from "../../entities/equipments/Equipment";
import EquipmentQuery from "../../entities/equipments/EquipmentQuery";
import { FetchResponse } from "../../services/api-client";
import { equipments } from "../../services/equipmentsServices";

const useEquipments = (query: EquipmentQuery) => {
  return useQuery<FetchResponse<Equipment>, Error>({
    queryKey: ["equipments", query],
    queryFn: () => equipments.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useEquipments;
