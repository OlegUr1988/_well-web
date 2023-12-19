import { useMutation } from "@tanstack/react-query";
import { importEquipments } from "../../services/equipmentsServices";

const useImportEquipmentsFromExcel = () => {
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("excelFile", file);
      return importEquipments.importFromExcel(formData);
    },
  });
};

export default useImportEquipmentsFromExcel;
