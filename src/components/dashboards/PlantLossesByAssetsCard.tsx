import { Center, Heading } from "@chakra-ui/react";
import _ from "lodash";
import { Asset } from "../../entities/assets";
import { useAssetsByIds } from "../../hooks/assets";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import DashboardCard from "./DashboardCard";
import LossesByAssetsPieChart from "./LossesByAssetsPieChart";

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
      <Heading mb={3} size="md">
        Top 15 Bad Actors
      </Heading>
      <Center>
        <LossesByAssetsPieChart assets={assets!} />
      </Center>
    </DashboardCard>
  );
};

export default PlantLossesByAssetsCard;
