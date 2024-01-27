import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import { useEquipments } from "../../hooks/equipments";
import {
  DashboardCard,
  DashboardCardErrorMessage,
  DashboardCardSkeleton,
} from "../dashboards";
import PerformanceGauge from "./PerformanceGauge";

const PerformancesCard = ({ asset }: { asset: Asset }) => {
  const {
    data: equipments,
    isLoading,
    error,
  } = useEquipments({ assetId: asset.id });

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  return (
    <DashboardCard>
      <Heading size="md">Performances</Heading>
      <Box h="350">
        <SimpleGrid
          h="100%"
          columns={{ base: 1, xl: equipments!.length > 1 ? 2 : 1 }}
          alignContent="center"
          overflowY="auto"
        >
          {equipments?.map((equipment) => (
            <PerformanceGauge key={equipment.id} equipment={equipment} />
          ))}
        </SimpleGrid>
      </Box>
    </DashboardCard>
  );
};

export default PerformancesCard;
