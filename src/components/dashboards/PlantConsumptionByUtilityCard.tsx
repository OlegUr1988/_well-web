import { Heading } from "@chakra-ui/react";
import DashboardCard from "./DashboardCard";
import ConsumptionsDonutChart from "./ConsumptionsDonutChart";
import { Asset } from "../../entities/assets";
import { useAssetsByIds } from "../../hooks/assets";
import _ from "lodash";

const PlantConsumptionByUtilityCard = ({ plant }: { plant: Asset }) => {
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

  if (isAreasLoading || isAssetsLoading) return null;

  if (areasError || assetsError) return null;

  return (
    <DashboardCard p={5}>
      <Heading size="md">Energy consumption by Utility</Heading>
      <ConsumptionsDonutChart assets={assets!} />
    </DashboardCard>
  );
};

export default PlantConsumptionByUtilityCard;
