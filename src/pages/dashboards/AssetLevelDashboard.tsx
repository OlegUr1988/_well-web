import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { AssetLevelDashboardHeaderPanel } from "../../components/dashboards";
import {
  LossesDailyLineChartCard,
  LossesTableCard,
} from "../../components/dashboards/losses";
import { PerformancesCard } from "../../components/dashboards/performances";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";
import useUtilityTypes from "../../hooks/useUtilityTypes";
import useGetUtilityTypes from "../../hooks/useGetUtilityTypes";

const AssetLevelDashboard = () => {
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
  const types = useGetUtilityTypes();

  if (isAreaLoading || isAssetLoading) return <LoadingSpinner />;

  if (areaError || assetError) return null;

  if (!types) return null;

  console.log(types);

  if (types["area"] && area?.utilityTypeId !== types["area"].id)
    return <Heading>Invalid Area type</Heading>;

  if (asset!.parentAssetId !== area!.id)
    return (
      <Heading>{`The asset: ${asset?.name} is not exists in area: ${area?.name}`}</Heading>
    );

  return (
    <Box p={5}>
      <Box mb={5}>
        <AssetLevelDashboardHeaderPanel area={area!} asset={asset!} />
      </Box>
      <SimpleGrid columns={2} gap={5} mb={5}>
        <LossesTableCard asset={asset!} />
        <PerformancesCard asset={asset!} />
      </SimpleGrid>
      <LossesDailyLineChartCard asset={asset!} />
    </Box>
  );
};

export default AssetLevelDashboard;
