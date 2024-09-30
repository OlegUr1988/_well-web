import { Box, Checkbox, HStack } from "@chakra-ui/react";
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
  const [enableDataLabels, setEnableDataLabels] = useState(false);
  const { data: parentAsset, isLoading, error } = useAsset(asset.id);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  return (
    <DashboardCard p={0} py={2}>
      <Box position="relative">
        <HStack position="absolute" className="z-level-one" top={-3}>
          <TrendTypeSelector onSelect={(type) => setChartType(type)} />
          <Checkbox
            isChecked={enableDataLabels}
            onChange={() => {
              setEnableDataLabels(!enableDataLabels);
            }}
          >
            Data Labels
          </Checkbox>
        </HStack>
        {chartType === "area" && (
          <LossesDailyAreaChart
            parentAsset={parentAsset!}
            enableDataLabels={enableDataLabels}
          />
        )}
        {chartType === "line" && (
          <LossesDailyLineChart
            parentAsset={parentAsset!}
            enableDataLabels={enableDataLabels}
          />
        )}
      </Box>
    </DashboardCard>
  );
};

export default LossesDailyTrendCard;
