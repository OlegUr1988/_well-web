import _ from "lodash";
import { Asset } from "../entities/assets";
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
  const totalProduction = _.sum(productions.map((r) => parseFloat(r.value)));
  const productionUnit = productions.length
    ? productions[0].PHDTag.unit.name
    : "Ton/hr";
  const productionGroups = _.groupBy(productions, (item) => item.timestamp);
  const productionDifferences = _.map(productionGroups, (array) =>
    _.sumBy(array, (item) => productionTarget - parseFloat(item.value))
  );
  const productionTargetDifference = parseFloat(
    ((_.sum(productionDifferences) * 100) / totalProduction - 100).toFixed(2)
  );

  // Calculating energy consumptions
  const totalEnergyConsumption = _.sum(
    energyConsumptions.map((r) => parseFloat(r.value))
  );
  const energyConsumptionUnit = energyConsumptions.length
    ? energyConsumptions[0].PHDTag.unit.name
    : "KW";
  const energyConsumptionGroups = _.groupBy(
    energyConsumptions,
    (item) => item.timestamp
  );
  const energyConsumptDifferences = _.map(energyConsumptionGroups, (array) =>
    _.sumBy(array, (item) => energyConsumptionTarget - parseFloat(item.value))
  );
  const energyConsumptDifference = parseFloat(
    (
      (_.sum(energyConsumptDifferences) * 100) / totalEnergyConsumption -
      100
    ).toFixed(2)
  );

  // Calculating spesific energy consumptions
  const totalSpecificEnergyConsumption =
    totalProduction / totalEnergyConsumption || 0;
  const Productions = _.mapValues(productionGroups, (obj) =>
    _.sumBy(obj, (item) => parseFloat(item.value))
  );
  const EnergyConsumptions = _.mapValues(energyConsumptionGroups, (obj) =>
    _.sumBy(obj, (item) => parseFloat(item.value))
  );
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
  const specificEnergyConsumptionDifference = parseFloat(
    (
      (_.sum(specificEnergyConsumptionDifferences) * 100) /
        totalSpecificEnergyConsumption -
      100
    ).toFixed(2)
  );

  // Calculating CO2 emissions
  const totatlAssetsDuty = _.sum(assetsRecords.map((r) => parseFloat(r.value)));
  const totalCO2Emission = totatlAssetsDuty * CO2coefficient!;
  const CO2EmissionDifferences = assetsRecords.map(
    (asset) => CO2EmissionTarget - parseFloat(asset.value) * CO2coefficient
  );
  const CO2EmissionDifferense = parseFloat(
    ((_.sum(CO2EmissionDifferences) * 100) / totalCO2Emission - 100).toFixed(2)
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
