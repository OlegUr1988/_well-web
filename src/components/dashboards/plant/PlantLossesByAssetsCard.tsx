import { Center, Heading } from "@chakra-ui/react";
import _ from "lodash";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useGetAssetsWithConsumption from "../../../hooks/useGetAssetsWithConsumption";
import { LossesByAssetsPieChart } from "../charts/";
import { DashboardCard, DashboardCardSkeleton } from "../common/";

const PlantLossesByAssetsCard = ({ plant }: { plant: Asset }) => {
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
    assetsWithConsumption,
    isLoading: isAssetsLoading,
    error: isAssetsError,
  } = useGetAssetsWithConsumption(assetIds);

  if (isAreasLoading || isAssetsLoading)
    return <DashboardCardSkeleton h={300} />;

  if (areasError || isAssetsError) return null;

  return (
    <DashboardCard p={5}>
      <Heading mb={3} size="md">
        Top 15 Bad Actors
      </Heading>
      <Center>
        <LossesByAssetsPieChart assets={assetsWithConsumption!} />
      </Center>
    </DashboardCard>
  );
};

export default PlantLossesByAssetsCard;
