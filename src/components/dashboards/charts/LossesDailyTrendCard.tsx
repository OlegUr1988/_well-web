import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Asset } from "../../../entities/assets";
import { useAsset } from "../../../hooks/assets";
import {
  DashboardCard,
  DashboardCardErrorMessage,
  DashboardCardSkeleton,
} from "../common";
import TrendTypeSelector, { chartType } from "../common/TrendTypeSelector";
import LossesDailyAreaChart from "./LossesDailyAreaChart";
import LossesDailyLineChart from "./LossesDailyLineChart";

const LossesDailyTrendCard = ({ asset }: { asset: Asset }) => {
  const [chartType, setChartType] = useState<chartType>("area");
  const { data: parentAsset, isLoading, error } = useAsset(asset.id);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  return (
    <DashboardCard p={0} py={2}>
      <Box position="relative">
        <Box position="absolute" className="z-level-one" top={-3}>
          <TrendTypeSelector onSelect={(type) => setChartType(type)} />
        </Box>
        {chartType === "area" && (
          <LossesDailyAreaChart parentAsset={parentAsset!} />
        )}
        {chartType === "line" && (
          <LossesDailyLineChart parentAsset={parentAsset!} />
        )}
      </Box>
    </DashboardCard>
  );
};

export default LossesDailyTrendCard;
