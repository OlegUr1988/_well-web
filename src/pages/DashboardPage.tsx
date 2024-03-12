import { Box, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { DashboardHeaderPanel } from "../components/dashboards";
import {
  LossesDailyLineChartCard,
  LossesTableCard,
} from "../components/dashboards/losses";
import { PerformancesCard } from "../components/dashboards/performances";
import { useAreaByName } from "../hooks/areas";
import { useAssetByName } from "../hooks/assets";

const DashboardPage = () => {
  const { areaName, assetName } = useParams();

  const {
    data: area,
    isLoading: isAreaLoading,
    error: areaError,
  } = useAssetByName({ name: areaName });
  const {
    data: asset,
    isLoading: isAssetLoading,
    error: assetError,
  } = useAssetByName({ name: assetName });

  if (isAreaLoading || isAssetLoading) return "Loading";

  if (areaError || assetError) return null;

  return (
    <Box p={5}>
      <Box mb={5}>
        <DashboardHeaderPanel area={area!} asset={asset!} />
      </Box>
      {/* <SimpleGrid columns={2} gap={5} mb={5}>
        <LossesTableCard asset={asset!} />
        <PerformancesCard asset={asset!} />
      </SimpleGrid>
      <LossesDailyLineChartCard asset={asset!} /> */}
    </Box>
  );
};

export default DashboardPage;
