import { useMutation } from "@tanstack/react-query";
import { UpdateUnit } from "../../entities/units";
import { updateUnit } from "../../services/unitsServices";

const useUpdateUnit = (id: string | number) => {
  return useMutation<UpdateUnit, Error, UpdateUnit>({
    mutationFn: (equipment) => updateUnit.put(id, equipment),
  });
};

export default useUpdateUnit;
