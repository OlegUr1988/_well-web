import { Box, Heading, Skeleton } from "@chakra-ui/react";
import { Asset } from "../entities/assets";
import { useEquipments } from "../hooks/equipments";
import DashboardCard from "./DashboardCard";
import LossesTable from "./LossesTable";

const LossesTableCard = ({ asset }: { asset: Asset }) => {
  const {
    data: equipments,
    isLoading,
    error,
  } = useEquipments({ assetId: asset.id });

  if (isLoading)
    return (
      <DashboardCard p={3}>
        <Skeleton h={350} borderRadius={10} />
      </DashboardCard>
    );

  if (error) return null;

  return (
    <DashboardCard p={3}>
      <Heading size="md" mb={3}>
        {asset.name}
      </Heading>
      <Box h={320} overflowY="auto">
        {equipments?.map((equipment) => (
          <Box key={equipment.id}>
            <Heading size="sm">{equipment.name}</Heading>
            <Box overflowX="auto" mb={3}>
              <LossesTable equipment={equipment} />
            </Box>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  );
};

export default LossesTableCard;
