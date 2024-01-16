import { Heading, Skeleton } from "@chakra-ui/react";
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
      <LossesTable />
    </DashboardCard>
  );
};

export default LossesTableCard;
