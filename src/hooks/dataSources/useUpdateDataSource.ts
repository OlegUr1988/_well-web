import { useMutation } from "@tanstack/react-query";
import { UpdateDataSource } from "../../entities/dataSource";
import { updateDataSource } from "../../services/dataSourcesServices";

const useUpdateDataSource = (id: string | number) => {
  return useMutation<UpdateDataSource, Error, UpdateDataSource>({
    mutationFn: (dataSource) => updateDataSource.put(id, dataSource),
  });
};

export default useUpdateDataSource;
