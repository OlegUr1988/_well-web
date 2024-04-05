import { Center, Heading } from "@chakra-ui/react";
import _ from "lodash";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import { ConsumptionsDonutChart } from "../charts/";
import { DashboardCard } from "../common/";

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
      <Center>
        <ConsumptionsDonutChart assets={assets!} />
      </Center>
    </DashboardCard>
  );
};

export default PlantConsumptionByUtilityCard;
