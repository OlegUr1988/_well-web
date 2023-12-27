import { useQuery } from "@tanstack/react-query";
import { Part } from "../../entities/parts";
import { parts } from "../../services/partsServices";

const usePart = (id: string | number) => {
  return useQuery<Part, Error>({
    queryKey: ["parts", id],
    queryFn: () => parts.get(id),
  });
};

export default usePart;
