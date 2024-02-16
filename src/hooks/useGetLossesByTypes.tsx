import { Attribute } from "../entities/attributes";
import useAttributeTypes from "./useAttributeTypes";

const useGetLossesByTypes = (attributes: Attribute[], typeName: string[]) => {
  const { data: types } = useAttributeTypes();

  const names = typeName.map((name) => name.toLowerCase());

  const lossTypes = types?.filter((type) =>
    names.includes(type.name.toLowerCase())
  );
  const lossTypeIds = lossTypes?.map((type) => type.id);
  return attributes?.filter((attr) =>
    lossTypeIds?.includes(attr.attributeTypeId)
  );
};

export default useGetLossesByTypes;
