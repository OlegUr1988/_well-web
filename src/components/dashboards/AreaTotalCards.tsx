import { Box, SimpleGrid } from "@chakra-ui/react";
import TotalKPICard from "./TotalKPICard";
import { Asset } from "../../entities/assets";
import _ from "lodash";
import useGetRecords from "../../hooks/useGetRecords";
import { useConstantByName } from "../../hooks/constants";

const AreaTotalCards = ({ area }: { area: Asset }) => {
  const {
    productionTarget,
    energyConsumptionTarget,
    specificEnergyConsupmtionTarget,
    CO2EmissionTarget,
  } = area.target;
  const attributes = _.flatten(area.attributes);
  const assignments = _.flatten(attributes.map((p) => p.assignments));
  const productionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "production"
  );
  const consumptionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "total energy consumption"
  );

  const { data: constant, isLoading: isCO2CoefficientLoading } =
    useConstantByName("CO2 conversion coefficient");
  const assetAttributes = _.flatten(
    area.children.map((asset) => asset.attributes)
  );
  const assetAssignments = _.flatten(
    assetAttributes.map((asset) => asset.assignments)
  );
  const { records: assetsRecords, isLoading: isChildrenLoading } =
    useGetRecords(assetAssignments);

  const { records: productions, isLoading: isProductionsLoading } =
    useGetRecords(productionAssignments);
  const {
    records: energyConsumptions,
    isLoading: isEnergyConsumptionsLoading,
  } = useGetRecords(consumptionAssignments);

  if (
    isProductionsLoading ||
    isEnergyConsumptionsLoading ||
    isChildrenLoading ||
    isCO2CoefficientLoading
  )
    return null;

  const productionUnit = productions.length
    ? productions[0].PHDTag.unit.name
    : "Ton";
  const energyConsumptionUnit = energyConsumptions.length
    ? energyConsumptions[0].PHDTag.unit.name
    : "KW";

  const totalProduction = _.sum(productions.map((r) => parseFloat(r.value)));
  const totalEnergyConsumption = _.sum(
    energyConsumptions.map((r) => parseFloat(r.value))
  );
  const totalSpecificEnergyConsumption =
    totalProduction / totalEnergyConsumption || 0;

  const CO2coefficient = constant?.value || 0;
  const totatlAssetsDuty = _.sum(assetsRecords.map((r) => parseFloat(r.value)));

  const totalCO2Emission = totatlAssetsDuty * CO2coefficient!;

  const productionGroups = _.groupBy(productions, (item) => item.timestamp);
  const productionDifferences = _.map(productionGroups, (array) =>
    _.sumBy(array, (item) => productionTarget - parseFloat(item.value))
  );
  const productionTargetDifference = (
    (_.sum(productionDifferences) * 100) / totalProduction -
    100
  ).toFixed(2);

  const energyConsumptionGroups = _.groupBy(
    energyConsumptions,
    (item) => item.timestamp
  );
  const energyConsumptDifferences = _.map(energyConsumptionGroups, (array) =>
    _.sumBy(array, (item) => energyConsumptionTarget - parseFloat(item.value))
  );
  const energyConsumptDifference = (
    (_.sum(energyConsumptDifferences) * 100) / totalEnergyConsumption -
    100
  ).toFixed(2);

  const totalProductions = _.mapValues(productionGroups, (obj) =>
    _.sumBy(obj, (item) => parseFloat(item.value))
  );
  const totalEnergyConsumptions = _.mapValues(energyConsumptionGroups, (obj) =>
    _.sumBy(obj, (item) => parseFloat(item.value))
  );
  const specificEnergyConsumptionGroups = _.mapValues(
    _.zipObject(_.keys(totalProductions), _.values(totalEnergyConsumptions)),
    (val, key) => {
      return totalProductions[key] / val;
    }
  );
  const specificEnergyConsumptionDifferences = _.map(
    specificEnergyConsumptionGroups,
    (item) => specificEnergyConsupmtionTarget - item
  );
  const specificEnergyConsumptionDifference = (
    (_.sum(specificEnergyConsumptionDifferences) * 100) /
      totalSpecificEnergyConsumption -
    100
  ).toFixed(2);

  const CO2EmissionDifferences = assetsRecords.map(
    (asset) => CO2EmissionTarget - parseFloat(asset.value) * CO2coefficient
  );
  const CO2EmissionDifferense = (
    (_.sum(CO2EmissionDifferences) * 100) / totalCO2Emission -
    100
  ).toFixed(2);

  return (
    <Box mb={5} w={{ base: "100%", xl: "75%" }}>
      <SimpleGrid columns={4} gap={5}>
        <TotalKPICard
          header="Production"
          value={totalProduction}
          units={productionUnit.toUpperCase()}
          difference={parseFloat(productionTargetDifference)}
        />
        <TotalKPICard
          header="Energy Consumption"
          value={totalEnergyConsumption}
          units={energyConsumptionUnit.toUpperCase()}
          difference={parseFloat(energyConsumptDifference)}
        />
        <TotalKPICard
          header="Specific Energy Consumption"
          value={totalSpecificEnergyConsumption}
          units="KW"
          difference={parseFloat(specificEnergyConsumptionDifference)}
        />
        <TotalKPICard
          header="CO2 Emission"
          value={totalCO2Emission}
          units="TON CO2"
          difference={parseFloat(CO2EmissionDifferense)}
        />
      </SimpleGrid>
    </Box>
  );
};

export default AreaTotalCards;
