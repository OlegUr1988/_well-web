import { heatType } from "../constants/utilityTypes";
import { Asset } from "../entities/assets";
import { useAssetsByIds } from "./assets";
import useAttributeTypes from "./useAttributeTypes";
import useUtilityTypes from "./useUtilityTypes";

const useGetAssetsWithConsumption = (assetIds: number[]) => {
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({
    ids: assetIds,
  });

  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  const {
    data: utilities,
    isLoading: isUtilitiesLoading,
    error: utilitiesError,
  } = useUtilityTypes();

  const isLoading = isAssetsLoading || isTypesLoading || isUtilitiesLoading;

  const error = assetsError || typesError || utilitiesError;

  let assetsWithConsumption: Asset[];

  if (!utilities) assetsWithConsumption = [];
  else {
    const heatUtility = utilities!.find(
      (utility) => utility.name.toLowerCase() === heatType
    );
    assetsWithConsumption =
      assets?.filter((asset) => asset.utilityTypeId !== heatUtility?.id) || [];
  }

  return { assetsWithConsumption, isLoading, error };
};

export default useGetAssetsWithConsumption;
