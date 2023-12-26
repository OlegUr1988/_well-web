import { useMutation } from "@tanstack/react-query";
import { importPHDTags } from "../../services/PHDTagsService";

const useImportPHDTagsFromExcel = () => {
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("excelFile", file);
      return importPHDTags.importFromExcel(formData);
    },
  });
};

export default useImportPHDTagsFromExcel;
