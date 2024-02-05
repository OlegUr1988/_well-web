import { Assignment } from "../entities/assignments";
import { filterByTimeRange } from "../utils/time";
import useRecords from "./useRecords";

const useGetRecords = (assignments: Assignment[]) => {
  const ids = assignments.map((assignment) => assignment.PHDTagId);
  const PHDTagIds = ids.length ? ids : [0];

  const { data, isLoading, error } = useRecords({ PHDTagIds });

  const records = filterByTimeRange(data!);

  return { records, isLoading, error };
};

export default useGetRecords;
