import { useMutation } from "@tanstack/react-query";
import { importAssets } from "../../services/assetsServices";

const useImportAssetsFromExcel = () => {
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("excelFile", file);
      return importAssets.importFromExcel(formData);
    },
  });
};

export default useImportAssetsFromExcel;
