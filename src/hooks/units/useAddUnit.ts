import { useMutation } from "@tanstack/react-query";
import { AddUnit } from "../../entities/units";
import { addUnit } from "../../services/unitsServices";

const useAddUnit = () => {
  return useMutation<AddUnit, Error, AddUnit>({
    mutationFn: addUnit.post,
  });
};

export default useAddUnit;
