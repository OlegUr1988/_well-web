import { Box } from "@chakra-ui/react";
import _ from "lodash";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import { DashboardCard } from "../common/";
import TotalKPICardHeader from "../TotalKPICardHeader";
import TotalLossesColumnChart from "../TotalLossesColumnChart";

const PlantLossesCard = ({ plant }: { plant: Asset }) => {
  const areaIds = plant.children.map((child) => child.id);
  const {
    data: areas,
    isLoading: isAreasLoading,
    error: areasError,
  } = useAssetsByIds({ ids: areaIds });
  const assetIds = _.flatten(
    areas?.map((area) => area.children.map((asset) => asset.id))
  );
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({
    ids: assetIds,
  });

  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  if (isAreasLoading || isTypesLoading || isAssetsLoading) return null;

  if (areasError || typesError || assetsError) return null;

  return (
    <DashboardCard p={5}>
      <TotalKPICardHeader label="Plant top 15 bad actors" />
      <Box className="z-level-one">
        <TotalLossesColumnChart assets={assets!} />
      </Box>
    </DashboardCard>
  );
};

export default PlantLossesCard;
