import { Box, SimpleGrid } from "@chakra-ui/react";
import TotalKPICard from "./TotalKPICard";
import { Asset } from "../../entities/assets";
import _ from "lodash";
import useGetRecords from "../../hooks/useGetRecords";
import { useConstantByName } from "../../hooks/constants";

const AreaTotalCards = ({ area }: { area: Asset }) => {
  //   const { productionTarget, energyConsumptionTarget } = area.target;
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
  const specificEnergyConsumption =
    totalProduction / totalEnergyConsumption || 0;

  const CO2coefficient = constant?.value || 0;
  const totatlAssetsDuty = _.sum(assetsRecords.map((r) => parseFloat(r.value)));

  const totalCO2Emission = totatlAssetsDuty * CO2coefficient!;

  return (
    <Box mb={5} w={{ base: "100%", xl: "75%" }}>
      <SimpleGrid columns={4} gap={5}>
        <TotalKPICard
          header="Production"
          value={totalProduction}
          units={productionUnit.toUpperCase()}
          difference={0.1}
        />
        <TotalKPICard
          header="Energy Consumption"
          value={totalEnergyConsumption}
          units={energyConsumptionUnit}
          difference={-0.7}
        />
        <TotalKPICard
          header="Specific Energy Consumption"
          value={specificEnergyConsumption}
          units="KW"
          difference={-0.6}
        />
        <TotalKPICard
          header="CO2 Emission"
          value={totalCO2Emission}
          units="TON CO2"
          difference={-0.7}
        />
      </SimpleGrid>
    </Box>
  );
};

export default AreaTotalCards;
