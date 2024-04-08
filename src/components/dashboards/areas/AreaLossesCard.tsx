import { Box } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import TotalLossesColumnChart from "../charts/TotalLossesColumnChart";
import {
  DashboardCard,
  DashboardCardSkeleton,
  TotalKPICardHeader,
} from "../common/";

const AreaLossesCard = ({ area }: { area: Asset }) => {
  const ids = area.children.map((child) => child.id);
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({ ids });
  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  if (isAssetsLoading || isTypesLoading)
    return <DashboardCardSkeleton h={500} />;

  if (assetsError || typesError) return null;

  return (
    <DashboardCard p={5}>
      <TotalKPICardHeader label="Area top 15 bad actors" />
      <Box className="z-level-one">
        <TotalLossesColumnChart assets={assets!} />
      </Box>
    </DashboardCard>
  );
};

export default AreaLossesCard;
