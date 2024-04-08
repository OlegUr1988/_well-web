import _ from "lodash";
import { Asset } from "../../entities/assets";
import {
  getArrayOfSums,
  getTotalDifference,
  groupBy,
} from "../../utils/records";
import { useConstantByName } from "../constants";
import useGetRecords from "../useGetRecords";

const useCalculateAreaCO2Emission = (area: Asset) => {
  const { CO2EmissionTarget } = area.target;

  const { data: constant, isLoading: isCO2CoefficientLoading } =
    useConstantByName("CO2 conversion coefficient");
  const CO2Coefficient = constant?.value || 0;

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

  if (isLoading)
    return { isLoading, totalCO2Emission: 0, CO2EmissionDifference: 0 };

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

export default useCalculateAreaCO2Emission;
