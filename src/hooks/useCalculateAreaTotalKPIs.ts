import _ from "lodash";
import { Asset } from "../entities/assets";
import { Record } from "../entities/records";
import { getSumOfRecords, groupBy } from "../utils/records";
import { useConstantByName } from "./constants";
import useGetRecords from "./useGetRecords";

const useCalculateAreaTotalKPIs = (area: Asset) => {
  // Targets for area
  const {
    productionTarget,
    energyConsumptionTarget,
    specificEnergyConsupmtionTarget,
    CO2EmissionTarget,
  } = area.target;

  // Get CO2 conversion coefficient
  const { data: constant, isLoading: isCO2CoefficientLoading } =
    useConstantByName("CO2 conversion coefficient");
  const CO2coefficient = constant?.value || 0;

  // Get assignments
  const attributes = _.flatten(area.attributes);
  const assignments = _.flatten(attributes.map((p) => p.assignments));
  const productionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "production"
  );
  const consumptionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "total energy consumption"
  );
  const assetAttributes = _.flatten(
    area.children.map((asset) => asset.attributes)
  );
  const assetAssignments = _.flatten(
    assetAttributes.map((asset) => asset.assignments)
  );

  // Get Records
  const { records: assetsRecords, isLoading: isChildrenLoading } =
    useGetRecords(assetAssignments);

  const { records: productions, isLoading: isProductionsLoading } =
    useGetRecords(productionAssignments);
  const {
    records: energyConsumptions,
    isLoading: isEnergyConsumptionsLoading,
  } = useGetRecords(consumptionAssignments);

  const isLoading =
    isProductionsLoading ||
    isEnergyConsumptionsLoading ||
    isChildrenLoading ||
    isCO2CoefficientLoading;

  if (isLoading) return null;

  // Calculating productions
  const totalProduction = parseFloat(getSumOfRecords(productions));
  const productionUnit = productions.length
    ? productions[0].PHDTag.unit.name
    : "Ton/hr";
  const productionGroups = groupBy(productions, "timestamp");
  const productionDifferences = getDiffirences(
    productionGroups,
    productionTarget
  );
  const productionTargetDifference = getTotalDifference(
    productionDifferences,
    totalProduction
  );

  // Calculating energy consumptions
  const totalEnergyConsumption = parseFloat(
    getSumOfRecords(energyConsumptions)
  );
  const energyConsumptionUnit = energyConsumptions.length
    ? energyConsumptions[0].PHDTag.unit.name
    : "KW";
  const energyConsumptionGroups = groupBy(energyConsumptions, "timestamp");
  const energyConsumptDifferences = getDiffirences(
    energyConsumptionGroups,
    energyConsumptionTarget
  );
  const energyConsumptDifference = getTotalDifference(
    energyConsumptDifferences,
    totalEnergyConsumption
  );

  // Calculating spesific energy consumptions
  const totalSpecificEnergyConsumption =
    totalEnergyConsumption / totalProduction || 0;
  const Productions = getArrayOfSums(productionGroups);
  const EnergyConsumptions = getArrayOfSums(energyConsumptionGroups);
  const specificEnergyConsumptionGroups = _.mapValues(
    _.zipObject(_.keys(Productions), _.values(EnergyConsumptions)),
    (val, key) => {
      return Productions[key] / val;
    }
  );
  const specificEnergyConsumptionDifferences = _.map(
    specificEnergyConsumptionGroups,
    (item) => specificEnergyConsupmtionTarget - item
  );
  const specificEnergyConsumptionDifference = getTotalDifference(
    specificEnergyConsumptionDifferences,
    totalSpecificEnergyConsumption
  );

  // Calculating CO2 emissions
  const totatlAssetsDuty = parseFloat(getSumOfRecords(assetsRecords));
  const totalCO2Emission = totatlAssetsDuty * CO2coefficient!;
  const CO2EmissionDifferences = assetsRecords.map(
    (asset) => CO2EmissionTarget - parseFloat(asset.value) * CO2coefficient
  );
  const CO2EmissionDifferense = getTotalDifference(
    CO2EmissionDifferences,
    totalCO2Emission
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
      CO2EmissionDifferense,
    },
    units: {
      productionUnit,
      energyConsumptionUnit,
    },
  };
};

export default useCalculateAreaTotalKPIs;

const getDiffirences = (groups: _.Dictionary<Record[]>, target: number) =>
  _.map(groups, (array) =>
    _.sumBy(array, (item) => target - parseFloat(item.value))
  );

const getTotalDifference = (differences: number[], total: number) =>
  parseFloat(((_.sum(differences) * 100) / total - 100).toFixed(2));

const getArrayOfSums = (groups: _.Dictionary<Record[]>) =>
  _.mapValues(groups, (obj) => _.sumBy(obj, (item) => parseFloat(item.value)));
