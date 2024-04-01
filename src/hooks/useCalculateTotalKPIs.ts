import _ from "lodash";
import { Asset } from "../entities/assets";
import {
  getArrayOfSums,
  getDiffirences,
  getSumOfRecords,
  getTotalDifference,
  groupBy,
} from "../utils/records";
import useGetRecords from "./useGetRecords";

const useCalculateTotalKPIs = (asset: Asset) => {
  // Targets for asset
  const {
    productionTarget,
    energyConsumptionTarget,
    specificEnergyConsupmtionTarget,
  } = asset.target;

  // Get assignments
  const attributes = _.flatten(asset.attributes);
  const assignments = _.flatten(attributes.map((p) => p.assignments));
  const productionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "production"
  );
  const consumptionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "total energy consumption"
  );

  // Get Records
  const { records: productions, isLoading: isProductionsLoading } =
    useGetRecords(productionAssignments);
  const {
    records: energyConsumptions,
    isLoading: isEnergyConsumptionsLoading,
  } = useGetRecords(consumptionAssignments);

  const isLoading = isProductionsLoading || isEnergyConsumptionsLoading;

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
    (item) => specificEnergyConsupmtionTarget - item
  );
  const specificEnergyConsumptionDifference = getTotalDifference(
    specificEnergyConsumptionDifferences,
    totalSpecificEnergyConsumption
  );

  return {
    totals: {
      totalProduction,
      totalEnergyConsumption,
      totalSpecificEnergyConsumption,
    },
    targetDifferences: {
      productionTargetDifference,
      energyConsumptDifference,
      specificEnergyConsumptionDifference,
    },
    units: {
      productionUnit,
      energyConsumptionUnit,
    },
  };
};

export default useCalculateTotalKPIs;
