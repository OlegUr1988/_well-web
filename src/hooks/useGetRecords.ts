import { Assignment } from "../entities/assignments";
import useRecords from "./useRecords";

const useGetRecords = (assignments: Assignment[]) => {
  const ids = assignments.map((assignment) => assignment.PHDTagId);
  const PHDTagIds = ids.length ? ids : [0];

  const { data: records, isLoading, error } = useRecords({ PHDTagIds });

  return { records, isLoading, error };
};

export default useGetRecords;
