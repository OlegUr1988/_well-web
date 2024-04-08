import _ from "lodash";
import { Asset } from "../../entities/assets";
import {
  getArrayOfSums,
  getTotalDifference,
  groupBy,
} from "../../utils/records";
import { useAssets, useAssetsByIds } from "../assets";
import { useConstantByName } from "../constants";
import useGetRecords from "../useGetRecords";

const useCalculatePlantCO2Emission = (plant: Asset) => {
  const { CO2EmissionTarget } = plant.target;

  const {
    data: constant,
    isLoading: isCO2CoefficientLoading,
    error: isCO2CoefficientError
  } = useConstantByName("CO2 conversion coefficient");
  const CO2Coefficient = constant?.value || 0;

  const areasIds = plant.children.map((area) => area.id);
  const {
    data: areas,
    isLoading: isAreasLoading,
    error: isAreasError
  } = useAssets({
    ids: areasIds,
  });

  const assetIds = _.flatten(
    areas?.map((area) => area.children.map((asset) => asset.id))
  );
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: isAssetsError
  } = useAssetsByIds({
    ids: assetIds,
  });

  const attributes = assets
    ? _.flatten(assets.map((asset) => asset.attributes))
    : [];
  const assignments = _.flatten(
    attributes.map((attr) => (attr ? attr.assignments : []))
  );

  // Get Records
  const {
    records: assetsRecords,
    isLoading: isRecordsLoading,
    error: isRecordsError,
  } = useGetRecords(assignments);

  const isLoading =
    isCO2CoefficientLoading ||
    isAreasLoading ||
    isAssetsLoading ||
    isRecordsLoading;

  const error =
    isCO2CoefficientError || isAreasError || isAssetsError || isRecordsError;

  if (isLoading)
    return {
      isLoading,
      totalCO2Emission: 0,
      CO2EmissionDifference: 0,
    };

  if (error) return null;

  // Calculating CO2 emissions
  const groupedRecords = groupBy(assetsRecords, "timestamp");
  const groupedSumOfRecords = getArrayOfSums(groupedRecords);
  const CO2EmissionsGrouped = _.mapValues(
    groupedSumOfRecords,
    (value) => value * CO2Coefficient
  );

  const CO2emissions = _.values(CO2EmissionsGrouped);
  const totalCO2Emission = _.sum(CO2emissions);
  const CO2EmissionDifferences = CO2emissions.map(
    (val) => val - CO2EmissionTarget
  );
  const CO2EmissionDifference = getTotalDifference(
    CO2EmissionDifferences,
    CO2EmissionTarget * CO2EmissionDifferences.length
  );

  return { isLoading, totalCO2Emission, CO2EmissionDifference };
};

export default useCalculatePlantCO2Emission;
