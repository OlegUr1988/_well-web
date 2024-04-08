import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { DataSource } from "../../entities/dataSource";
import { dataSources } from "../../services/dataSourcesServices";

const useDataSource = (id: string | number) => {
  return useQuery<DataSource, Error>({
    queryKey: ["dataSources", id],
    queryFn: () => dataSources.get(id),
    staleTime: ms("24h"),
  });
};

export default useDataSource;
