import _ from "lodash";
import useAttributeTypes from "./useAttributeTypes";
import { AttributeType } from "../entities/attributeType";

const useGetAttributeTypes = () => {
  const { data: attributeTypes } = useAttributeTypes();

  return _.keyBy(attributeTypes, (item: AttributeType) =>
    item.name.toLowerCase()
  );
};

export default useGetAttributeTypes;
