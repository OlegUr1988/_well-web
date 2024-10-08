import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { useCalculateKPI } from "../../../hooks/calculations";
import useDashboardsStore from "../../../store/dashboard";
import { TotalKPICard, TotalKPISkeletonCard } from "../common/";

const AreaTotalCards = ({ area }: { area: Asset }) => {
  const setTrend = useDashboardsStore((s) => s.setTrend);
  const totalKPIs = useCalculateKPI(area);

  if (!totalKPIs) return null;

  const { isLoading, totals, units } = totalKPIs;

  if (isLoading)
    return (
      <SimpleGrid columns={4} gap={5}>
        <TotalKPISkeletonCard />
        <TotalKPISkeletonCard />
        <TotalKPISkeletonCard />
        <TotalKPISkeletonCard />
      </SimpleGrid>
    );

  const {
    totalProduction,
    totalEnergyConsumption,
    totalSpecificEnergyConsumption,
    totalCO2Emission,
  } = totals;

  const { productionUnit, energyConsumptionUnit } = units;

  const { targetDifferences } = totalKPIs!;
  const {
    productionTargetDifference,
    energyConsumptDifference,
    specificEnergyConsumptionDifference,
    CO2EmissionDifference,
  } = targetDifferences;

  return (
    <Box>
      <SimpleGrid columns={4} gap={5}>
        <GridItem onClick={() => setTrend("production")} cursor="pointer">
          <TotalKPICard
            header="Production"
            value={totalProduction}
            units={productionUnit}
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
            units={energyConsumptionUnit}
            difference={energyConsumptDifference}
            isLimit={true}
          />
        </GridItem>
        <GridItem
          onClick={() => setTrend("specific energy consumption")}
          cursor="pointer"
        >
          <TotalKPICard
            header="Specific Energy Consumption"
            value={totalSpecificEnergyConsumption}
            units="kWh/Ton"
            difference={specificEnergyConsumptionDifference}
            isLimit={true}
          />
        </GridItem>
        <GridItem onClick={() => setTrend("CO2 emission")} cursor="pointer">
          <TotalKPICard
            header="CO2 Emission"
            value={totalCO2Emission}
            units="Ton"
            difference={CO2EmissionDifference}
            isLimit={true}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default AreaTotalCards;
