import _ from "lodash";
import { UtilityType } from "../entities/utilityTypes";
import useUtilityTypes from "./useUtilityTypes";

const useGetUtilityTypes = () => {
  const { data: assetTypes } = useUtilityTypes();

  return _.keyBy(assetTypes, (item: UtilityType) => item.name.toLowerCase());
};

export default useGetUtilityTypes;
