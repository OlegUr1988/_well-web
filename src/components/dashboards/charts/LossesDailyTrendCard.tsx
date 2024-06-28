import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Asset } from "../../../entities/assets";
import { useAsset } from "../../../hooks/assets";
import {
    DashboardCard,
    DashboardCardErrorMessage,
    DashboardCardSkeleton,
} from "../common";
import TrendTypeSelector from "../common/TrendTypeSelector";
import LossesDailyAreaChart from "./LossesDailyAreaChart";
import LossesDailyLineChart from "./LossesDailyLineChart";

const LossesDailyTrendCard = ({ asset }: { asset: Asset }) => {
  const [chartType, setChartType] = useState("line");
  const { data: parentAsset, isLoading, error } = useAsset(asset.id);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  return (
    <DashboardCard p={0} py={2}>
      <Box position="relative">
        <Box position="absolute" className="z-level-one" top={-3}>
          <TrendTypeSelector onSelect={(type) => setChartType(type)} />
        </Box>

        {chartType === "line" && (
          <LossesDailyLineChart parentAsset={parentAsset!} />
        )}
        {chartType === "area" && (
          <LossesDailyAreaChart parentAsset={parentAsset!} />
        )}
      </Box>
    </DashboardCard>
  );
};

export default LossesDailyTrendCard;
