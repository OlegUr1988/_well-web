import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Part, PartQuery } from "../../entities/parts";
import { parts } from "../../services/partsServices";

const useParts = (query: PartQuery) => {
  return useQuery<Part[], Error>({
    queryKey: ["parts", query],
    queryFn: () => parts.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useParts;
