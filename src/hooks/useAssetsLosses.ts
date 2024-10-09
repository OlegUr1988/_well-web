import { useAssetsByIds } from "./assets";
import useAttributeTypes from "./useAttributeTypes";

const useAssetsLosses = (assetIds: number[]) => {
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({
    ids: assetIds,
  });

  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  const isLoading = isAssetsLoading || isTypesLoading;

  const error = assetsError || typesError;

  return { assets, isLoading, error };
};

export default useAssetsLosses;
