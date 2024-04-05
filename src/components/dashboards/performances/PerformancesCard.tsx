import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { DashboardCardErrorMessage, DashboardCardSkeleton } from "..";
import { Asset } from "../../../entities/assets";
import { useAsset } from "../../../hooks/assets";
import { DashboardCard } from "../common";
import PerformanceGaugeChart from "./PerformanceGaugeChart";

const PerformancesCard = ({ asset }: { asset: Asset }) => {
  const { data: parentAsset, isLoading, error } = useAsset(asset.id);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  const assets = parentAsset?.children;

  return (
    <DashboardCard p={3}>
      <Heading size="md">Performances</Heading>
      <Box h="300">
        <SimpleGrid
          h="100%"
          columns={{ base: 1, xl: assets!.length > 1 ? 2 : 1 }}
          alignContent={{ base: "start", xl: "flex-start" }}
          overflowY="auto"
        >
          {assets?.map((asset) => (
            <PerformanceGaugeChart
              key={asset.id}
              asset={asset}
              count={assets!.length}
            />
          ))}
        </SimpleGrid>
      </Box>
    </DashboardCard>
  );
};

export default PerformancesCard;
