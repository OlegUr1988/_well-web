import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Attribute, AttributeQuery } from "../../entities/attributes";
import { attributes } from "../../services/attributesServices";

const useAttributes = (query: AttributeQuery) => {
  return useQuery<Attribute[], Error>({
    queryKey: ["attributes", query],
    queryFn: () => attributes.getAll({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useAttributes;
