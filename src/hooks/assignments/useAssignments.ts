import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Assignment } from "../../entities/Assignment";
import { assignments } from "../../services/assignmentsServices";

const useAssignments = (paramId: number) => {
  return useQuery<Assignment[], Error>({
    queryKey: ["parts", paramId],
    queryFn: () => assignments.getArrayById(paramId),
    placeholderData: keepPreviousData,
  });
};

export default useAssignments;
