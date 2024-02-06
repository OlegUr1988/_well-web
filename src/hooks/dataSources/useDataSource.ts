import { useQuery } from "@tanstack/react-query";
import { DataSource } from "../../entities/dataSource";
import { dataSources } from "../../services/dataSourcesServices";

const useDataSource = (id: string | number) => {
  return useQuery<DataSource, Error>({
    queryKey: ["dataSources", id],
    queryFn: () => dataSources.get(id),
  });
};

export default useDataSource;
