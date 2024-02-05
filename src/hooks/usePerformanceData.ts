import { Assignment } from "../entities/assignments";
import useGetRecords from "./useGetRecords";

const usePerformanceData = (aasignments: Assignment[]) => {
  const { records, isLoading, error } = useGetRecords(aasignments);

  return { records, isLoading, error };
};

export default usePerformanceData;
