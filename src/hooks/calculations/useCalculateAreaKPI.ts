import _ from "lodash";
import { Asset } from "../../entities/assets";
import {
  calculateSum,
  getArrayOfSums,
  getDiffirences,
  getTotalDifference,
  groupBy,
} from "../../utils/records";
import { useConstantByName } from "../constants";
import useGetRecords from "../useGetRecords";

const useCalculateAreaKPI = (area: Asset) => {
  // Get Targets for asset
  const {
    productionTarget,
    energyConsumptionTarget,
    specificEnergyConsupmtionTarget,
    CO2EmissionTarget,
  } = area.target;

  const {
    data: constant,
    isLoading: isCO2CoefficientLoading,
    error: isCO2CoefficientError,
  } = useConstantByName("CO2 conversion coefficient");
  const CO2Coefficient = constant?.value || 0;

  // Production part
  // Get Production assignments
  const attributes = _.flatten(area.attributes);
  const assignments = _.flatten(attributes.map((p) => p.assignments));
  const productionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "production"
  );

  // Get Production Records
  const {
    records: productions,
    isLoading: isProductionsLoading,
    error: isProductionError,
  } = useGetRecords(productionAssignments);

  // Energy Consumption part
  // Get Assets Assignments
  const assetAttributes = _.flatten(
    area.children.map((asset) => asset.attributes)
  );
  const assetAssignments = _.flatten(
    assetAttributes.map((asset) => asset.assignments)
  );

  // Get Assets Records
  const {
    records: assetsRecords,
    isLoading: isChildrenLoading,
    error: isAssetsError,
  } = useGetRecords(assetAssignments);

  // Handle loading and error
  const isLoading =
    isCO2CoefficientLoading || isProductionsLoading || isChildrenLoading;
  const error = isCO2CoefficientError || isProductionError || isAssetsError;

  if (isLoading)
    return { isLoading, totals: {}, targetDifferences: {}, units: {}, error };

  if (error) return null;

  // Calculating productions
  const totalProduction = calculateSum(productions);
  const productionUnit = productions.length
    ? productions[0].PHDTag.unit.name
    : "Ton";
  const productionGroups = groupBy(productions, "timestamp");
  const productionDifferences = getDiffirences(
    productionGroups,
    productionTarget
  );
  const productionTargetDifference = getTotalDifference(
    productionDifferences,
    productionTarget * productionDifferences.length
  );

  // Calculating energy consumptions
  const totalEnergyConsumption = calculateSum(assetsRecords);
  const energyConsumptionUnit = assetsRecords.length
    ? assetsRecords[0].PHDTag.unit.name
    : "KWh";
  const energyConsumptionGroups = groupBy(assetsRecords, "timestamp");
  const energyConsumptDifferences = getDiffirences(
    energyConsumptionGroups,
    energyConsumptionTarget
  );
  const energyConsumptDifference = getTotalDifference(
    energyConsumptDifferences,
    energyConsumptionTarget * energyConsumptDifferences.length
  );

  // Calculating spesific energy consumptions
  const totalSpecificEnergyConsumption =
    totalEnergyConsumption / totalProduction || 0;
  const sumOfProductions = getArrayOfSums(productionGroups);
  const sumOfEnergyConsumptions = getArrayOfSums(energyConsumptionGroups);
  const specificEnergyConsumptionGroups = _.mapValues(
    _.zipObject(_.keys(sumOfProductions), _.values(sumOfEnergyConsumptions)),
    (val, key) => {
      return sumOfProductions[key] / val;
    }
  );
  const specificEnergyConsumptionDifferences = _.map(
    specificEnergyConsumptionGroups,
    (item) => item - specificEnergyConsupmtionTarget
  );
  const specificEnergyConsumptionDifference = getTotalDifference(
    specificEnergyConsumptionDifferences,
    specificEnergyConsupmtionTarget *
      specificEnergyConsumptionDifferences.length
  );

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

  return {
    isLoading,
    totals: {
      totalProduction,
      totalEnergyConsumption,
      totalSpecificEnergyConsumption,
      totalCO2Emission,
    },
    targetDifferences: {
      productionTargetDifference,
      energyConsumptDifference,
      specificEnergyConsumptionDifference,
      CO2EmissionDifference,
    },
    units: {
      productionUnit,
      energyConsumptionUnit,
    },
    error,
  };
};

export default useCalculateAreaKPI;
