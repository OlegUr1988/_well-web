import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import {
  useCalculateAreaCO2Emission,
  useCalculateTotalKPIs,
} from "../../../hooks/calculations";
import useDashboardsStore from "../../../store/dashboard";
import { TotalKPICard, TotalKPISkeletonCard } from "../common/";

const AreaTotalCards = ({ area }: { area: Asset }) => {
  const setTrend = useDashboardsStore((s) => s.setTrend);
  const totalKPIs = useCalculateTotalKPIs(area);
  const CO2EmissionKPI = useCalculateAreaCO2Emission(area);

  if (!totalKPIs || !CO2EmissionKPI) return null;

  const { isLoading: isTotalKPIsLoading, totals, units } = totalKPIs;
  const {
    isLoading: isCO2EmissionLoading,
    totalCO2Emission,
    CO2EmissionDifference,
  } = CO2EmissionKPI;

  if (isTotalKPIsLoading || isCO2EmissionLoading)
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
  } = totals;

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
            units="KW"
            difference={specificEnergyConsumptionDifference}
            isLimit={true}
          />
        </GridItem>
        <GridItem onClick={() => setTrend("CO2 emission")} cursor="pointer">
          <TotalKPICard
            header="CO2 Emission"
            value={totalCO2Emission}
            units="TON CO2"
            difference={CO2EmissionDifference}
            isLimit={true}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default AreaTotalCards;
