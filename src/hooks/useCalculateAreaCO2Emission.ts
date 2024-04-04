import _ from "lodash";
import { Asset } from "../entities/assets";
import { getSumOfRecords, getTotalDifference } from "../utils/records";
import { useConstantByName } from "./constants";
import useGetRecords from "./useGetRecords";

const useCalculateAreaCO2Emission = (area: Asset) => {
  const { CO2EmissionTarget } = area.target;

  const { data: constant, isLoading: isCO2CoefficientLoading } =
    useConstantByName("CO2 conversion coefficient");
  const CO2coefficient = constant?.value || 0;

  const assetAttributes = _.flatten(
    area.children.map((asset) => asset.attributes)
  );
  const assetAssignments = _.flatten(
    assetAttributes.map((asset) => asset.assignments)
  );
  // Get Records
  const { records: assetsRecords, isLoading: isChildrenLoading } =
    useGetRecords(assetAssignments);

  const isLoading = isChildrenLoading || isCO2CoefficientLoading;

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

export default useCalculateAreaCO2Emission;
