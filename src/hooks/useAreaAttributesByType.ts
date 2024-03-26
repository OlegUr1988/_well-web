import _ from "lodash";
import { Asset } from "../entities/assets";
import useAttributeTypes from "./useAttributeTypes";

const useAreaAttributesByType = (
  assets: Asset[],
  typeName: "design loss" | "operating loss"
) => {
  const { data: types, isLoading, error } = useAttributeTypes();

  if (isLoading) return null;

  if (error) return null;

  const type = types?.find(
    (type) => type.name.toLowerCase() === (typeName as unknown as string)
  );

  const subassets = _.flatten(assets?.map((asset) => asset.children));
  const attributes = subassets.map((s) => s.attributes);
  return attributes.map((nestedArray) =>
    nestedArray
      ? nestedArray.filter((attr) => attr.attributeTypeId === type!.id)
      : []
  );
};

export default useAreaAttributesByType;
