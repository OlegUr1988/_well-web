import _ from "lodash";
import { heatType } from "../../constants/utilityTypes";
import { Asset } from "../../entities/assets";
import {
  calculateSum,
  getArrayOfSums,
  getDiffirences,
  getTotalDifference,
  groupBy,
} from "../../utils/records";
import { useAssets, useAssetsByIds } from "../assets";
import { useConstantByName } from "../constants";
import useGetRecords from "../useGetRecords";
import useUtilityTypes from "../useUtilityTypes";

const useCalculateKPI = (entity: Asset, isPlant = false) => {
  // Get Targets for asset
  const {
    productionTarget,
    energyConsumptionTarget,
    specificEnergyConsupmtionTarget,
    CO2EmissionTarget,
  } = entity.target;

  // Get Constants
  const {
    data: constant,
    isLoading: isCO2CoefficientLoading,
    error: isCO2CoefficientError,
  } = useConstantByName("CO2 conversion coefficient");
  const CO2Coefficient = constant?.value || 0;

  // Get Utilities
  const {
    data: utilities,
    isLoading: isUtilitiesLoading,
    error: isUtilitiesError,
  } = useUtilityTypes();

  const heatUtility = utilities?.find(
    (utility) => utility.name.toLowerCase() === heatType
  );

  // Production part
  // Get Production assignments
  const entityAttributes = _.flatten(entity.attributes);
  const entityAssignments = _.flatten(
    entityAttributes.map((p) => p.assignments)
  );
  const productionAssignments = entityAssignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "production"
  );

  // Get Production Records
  const {
    records: productions,
    isLoading: isProductionsLoading,
    error: isProductionError,
  } = useGetRecords(productionAssignments);

  // Energy Consumption part
  // Get Plant Assignments
  const areasIds = entity.children.map((area) => area.id);
  const {
    data: areas,
    isLoading: isAreasLoading,
    error: isAreasError,
  } = useAssets({
    ids: areasIds,
  });

  const assetIds = _.flatten(
    areas?.map((area) => area.children.map((asset) => asset.id)) || []
  );

  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: isAssetsError,
  } = useAssetsByIds({
    ids: assetIds,
  });

  const filteredAssets = assets?.filter(
    (asset) => asset.utilityTypeId !== heatUtility?.id
  );

  const attributesForPlant = filteredAssets
    ? _.flatten(filteredAssets.map((asset) => asset.attributes))
    : [];
  const assignmentsForPlant = _.flatten(
    attributesForPlant.map((attr) => attr?.assignments || [])
  );

  // Get Area assignments
  const filteredChildren = entity.children.filter(
    (asset) => asset.utilityTypeId !== heatUtility?.id
  );

  const attributesForArea = _.flatten(
    filteredChildren.map((asset) => asset.attributes)
  );
  const assignmentsForArea = _.flatten(
    attributesForArea.map((attr) => attr.assignments)
  );

  const consumptionAssignments = isPlant
    ? assignmentsForPlant
    : assignmentsForArea;

  // Get Assets Records
  const {
    records: consumptions,
    isLoading: isRecordsLoading,
    error: isRecordsError,
  } = useGetRecords(consumptionAssignments);

  // Handle loading and error
  const isLoading =
    isCO2CoefficientLoading ||
    isUtilitiesLoading ||
    isProductionsLoading ||
    isAreasLoading ||
    isAssetsLoading ||
    isRecordsLoading;

  const error =
    isCO2CoefficientError ||
    isUtilitiesError ||
    isProductionError ||
    isAreasError ||
    isAssetsError ||
    isRecordsError;

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
  const totalEnergyConsumption = calculateSum(consumptions);
  const energyConsumptionUnit = consumptions.length
    ? consumptions[0].PHDTag.unit.name
    : "KWh";
  const energyConsumptionGroups = groupBy(consumptions, "timestamp");
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
  const groupedRecords = groupBy(consumptions, "timestamp");
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

export default useCalculateKPI;
