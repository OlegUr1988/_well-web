import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/assets/importFromExcel");


const useImportAssetsFromExcel = () => {
    return  useMutation({
        mutationFn: (file: File) => {
            const formData = new FormData();
            formData.append('excelFile', file);
            return apiClient.importFromExcel(formData)},
      });

}

export default useImportAssetsFromExcel