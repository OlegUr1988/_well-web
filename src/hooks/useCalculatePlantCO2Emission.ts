import _ from "lodash";
import { Asset } from "../entities/assets";
import { getSumOfRecords, getTotalDifference } from "../utils/records";
import { useAssets, useAssetsByIds } from "./assets";
import { useConstantByName } from "./constants";
import useGetRecords from "./useGetRecords";

const useCalculatePlantCO2Emission = (plant: Asset) => {
  const { CO2EmissionTarget } = plant.target;

  const { data: constant, isLoading: isCO2CoefficientLoading } =
    useConstantByName("CO2 conversion coefficient");
  const CO2coefficient = constant?.value || 0;

  const areasIds = plant.children.map((area) => area.id);
  const { data: areas, isLoading: isAreasLoading } = useAssets({
    ids: areasIds,
  });

  const assetIds = _.flatten(
    areas?.map((area) => area.children.map((asset) => asset.id))
  );
  const { data: assets, isLoading: isAssetsLoading } = useAssetsByIds({
    ids: assetIds,
  });

  const attributes = assets
    ? _.flatten(assets.map((asset) => asset.attributes))
    : [];
  const assignments = _.flatten(
    attributes.map((attr) => (attr ? attr.assignments : []))
  );

  // Get Records
  const { records: assetsRecords, isLoading: isRecordsLoading } =
    useGetRecords(assignments);

  const isLoading =
    isCO2CoefficientLoading ||
    isAreasLoading ||
    isAssetsLoading ||
    isRecordsLoading;

  if (isLoading) return null;

  // Calculating CO2 emissions
  const totatlAssetsDuty = parseFloat(getSumOfRecords(assetsRecords));
  const totalCO2Emission = totatlAssetsDuty * CO2coefficient!;
  const CO2EmissionDifferences = assetsRecords.map(
    (asset) => parseFloat(asset.value) * CO2coefficient - CO2EmissionTarget
  );

  const CO2EmissionDifference = getTotalDifference(
    CO2EmissionDifferences,
    CO2EmissionTarget * CO2EmissionDifferences.length
  );

  return { totalCO2Emission, CO2EmissionDifference };
};

export default useCalculatePlantCO2Emission;
