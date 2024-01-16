import { useQuery } from "@tanstack/react-query";
import { Record, RecordQuery } from "../entities/records";
import { records } from "../services/recordsServices";

const useRecords = (query: RecordQuery) => {
  return useQuery<Record[], Error>({
    queryKey: ["records", query],
    queryFn: () => records.getAll({ params: query }),
  });
};

export default useRecords;
