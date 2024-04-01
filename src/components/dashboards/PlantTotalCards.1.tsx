import { Box } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import useCalculateTotalKPIs from "../../hooks/useCalculateAreaTotalKPIs";

export const PlantTotalCards = ({ plant }: { plant: Asset }) => {
  const totalKPIs = useCalculateTotalKPIs(plant);

  if (!totalKPIs) return null;

  const { totals } = totalKPIs!;
  const {
    totalProduction,
    totalEnergyConsumption,
    totalSpecificEnergyConsumption,
  } = totals;

  const { units } = totalKPIs!;
  const { productionUnit, energyConsumptionUnit } = units;

  const { targetDifferences } = totalKPIs!;
  const {
    productionTargetDifference,
    energyConsumptDifference,
    specificEnergyConsumptionDifference,
  } = targetDifferences;

  return (
    <Box mb={5} w={{ base: "100%", xl: "75%" }}>
      <SimpleGrid columns={4} gap={5}>
        <TotalKPICard
          header="Production"
          value={totalProduction}
          units={productionUnit.toUpperCase()}
          difference={productionTargetDifference}
        />
        <TotalKPICard
          header="Energy Consumption"
          value={totalEnergyConsumption}
          units={energyConsumptionUnit.toUpperCase()}
          difference={energyConsumptDifference}
        />
        <TotalKPICard
          header="Specific Energy Consumption"
          value={totalSpecificEnergyConsumption}
          units="KW"
          difference={specificEnergyConsumptionDifference}
        />
        <TotalKPICard
          header="CO2 Emission"
          value={totalCO2Emission}
          units="TON CO2"
          difference={CO2EmissionDifference}
        />
      </SimpleGrid>
    </Box>
  );
};
