import { useQuery } from "@tanstack/react-query";
import { Attribute } from "../../entities/attributes";
import { attributes } from "../../services/attributesServices";

const useAttribute = (id: string | number) => {
  return useQuery<Attribute, Error>({
    queryKey: ["attributes", id],
    queryFn: () => attributes.get(id),
  });
};

export default useAttribute;
