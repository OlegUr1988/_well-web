import { Box, Heading } from "@chakra-ui/react";
import {
  DashboardCard,
  DashboardCardErrorMessage,
  DashboardCardSkeleton,
} from "..";
import { Asset } from "../../../entities/assets";
import { useAsset } from "../../../hooks/assets";
import LossesSummaryRow from "./LossesSummaryRow";
import LossesTablesField from "./LossesTablesField";

const LossesTableCard = ({ asset }: { asset: Asset }) => {
  const { data: parentAsset, isLoading, error } = useAsset(asset.id);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  const assets = parentAsset?.children;

  return (
    <DashboardCard>
      <Heading size="md" mb={3}>
        {asset.name}
      </Heading>

      <Box h={250} mb={3} overflowY="auto">
        <LossesTablesField assets={assets!} />
      </Box>

      <Box>
        <LossesSummaryRow assets={assets!} />
      </Box>
    </DashboardCard>
  );
};

export default LossesTableCard;
