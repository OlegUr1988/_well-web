import { Box, Heading, Skeleton } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import { useEquipments } from "../../hooks/equipments";
import DashboardCard from "../DashboardCard";
import LossesSummaryRow from "./LossesSummaryRow";
import LossesTablesField from "./LossesTablesField";

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

      <Box h={320} mb={3} overflowY="auto">
        <LossesTablesField equipments={equipments!} />
      </Box>

      <Box>
        <LossesSummaryRow equipments={equipments!} />
      </Box>
    </DashboardCard>
  );
};

export default LossesTableCard;
