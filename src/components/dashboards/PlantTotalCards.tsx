import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import useCalculateTotalKPIs from "../../hooks/useCalculateTotalKPIs";
import useCalculatePlantCO2Emission from "../../hooks/useCalculatePlantCO2Emission";
import TotalKPICard from "./TotalKPICard";
import useDashboardsStore from "../../store/dashboard";

const PlantTotalCards = ({ plant }: { plant: Asset }) => {
  const setTrend = useDashboardsStore((s) => s.setTrend);
  const totalKPIs = useCalculateTotalKPIs(plant);
  const CO2EmissionKPI = useCalculatePlantCO2Emission(plant);

  if (!totalKPIs || !CO2EmissionKPI) return null;

  const { totals } = totalKPIs!;
  const {
    totalProduction,
    totalEnergyConsumption,
    totalSpecificEnergyConsumption,
  } = totals;
  const { totalCO2Emission, CO2EmissionDifference } = CO2EmissionKPI;

  const { units } = totalKPIs!;
  const { productionUnit, energyConsumptionUnit } = units;

  const { targetDifferences } = totalKPIs!;
  const {
    productionTargetDifference,
    energyConsumptDifference,
    specificEnergyConsumptionDifference,
  } = targetDifferences;

  return (
    <Box>
      <SimpleGrid columns={4} gap={5}>
        <GridItem onClick={() => setTrend("production")} cursor="pointer">
          <TotalKPICard
            header="Production"
            value={totalProduction}
            units={productionUnit.toUpperCase()}
            difference={productionTargetDifference}
          />
        </GridItem>
        <GridItem
          onClick={() => setTrend("energy consumption")}
          cursor="pointer"
        >
          <TotalKPICard
            header="Energy Consumption"
            value={totalEnergyConsumption}
            units={energyConsumptionUnit.toUpperCase()}
            difference={energyConsumptDifference}
          />
        </GridItem>
        <GridItem
          onClick={() => setTrend("specific energy consumption")}
          cursor="pointer"
        >
          <TotalKPICard
            header="Specific Energy Consumption"
            value={totalSpecificEnergyConsumption}
            units="KW"
            difference={specificEnergyConsumptionDifference}
          />
        </GridItem>
        <GridItem onClick={() => setTrend("CO2 emission")} cursor="pointer">
          <TotalKPICard
            header="CO2 Emission"
            value={totalCO2Emission}
            units="TON CO2"
            difference={CO2EmissionDifference}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default PlantTotalCards;
