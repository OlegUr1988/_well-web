import { Box, Heading } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { useAsset } from "../../../hooks/assets";
import {
  DashboardCard,
  DashboardCardErrorMessage,
  DashboardCardSkeleton,
} from "../common";
import { LossesSummaryRow, LossesTablesField } from "./tables";

const AssetLossesTableCard = ({ asset }: { asset: Asset }) => {
  const { data: parentAsset, isLoading, error } = useAsset(asset.id);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  const assets = parentAsset?.children;

  return (
    <DashboardCard p={3}>
      <Heading size="md" mb={3}>
        {asset.name}
      </Heading>

      <Box h={250} mb={3} overflowY="auto">
        <LossesTablesField parentAsset={asset} assets={assets!} />
      </Box>

      <Box>
        <LossesSummaryRow parentAsset={asset} assets={assets!} />
      </Box>
    </DashboardCard>
  );
};

export default AssetLossesTableCard;
