import { Attribute } from "../entities/attributes";
import useAttributeTypes from "./useAttributeTypes";

const useGetAttributesByType = (attributes: Attribute[], typeName: string) => {
  const { data: types } = useAttributeTypes();
  const lossType = types?.find(
    (type) => type.name.toLowerCase() === typeName.toLowerCase()
  );
  return attributes?.filter((attr) => attr.attributeTypeId === lossType?.id);
};

export default useGetAttributesByType;
