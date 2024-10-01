import { Box, Checkbox, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Asset } from "../../../entities/assets";
import { TrendType } from "../../../entities/trendType";
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
  const [trendType, setTrendType] = useState<TrendType>("area");
  const [enableDataLabels, setEnableDataLabels] = useState(true);
  const { data: parentAsset, isLoading, error } = useAsset(asset.id);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  return (
    <DashboardCard p={0} py={2}>
      <Box position="relative">
        <HStack position="absolute" className="z-level-one" top={-3}>
          <TrendTypeSelector onSelect={(type) => setTrendType(type)} />
          <Show above="lg">
            <Checkbox
              isChecked={enableDataLabels}
              onChange={() => {
                setEnableDataLabels(!enableDataLabels);
              }}
            >
              Data Labels
            </Checkbox>
          </Show>
        </HStack>
        {trendType === "area" && (
          <LossesDailyAreaChart
            parentAsset={parentAsset!}
            enableDataLabels={enableDataLabels}
          />
        )}
        {trendType === "line" && (
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
