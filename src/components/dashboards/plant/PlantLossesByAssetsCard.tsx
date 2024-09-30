import { Center, Heading } from "@chakra-ui/react";
import _ from "lodash";
import { heatType } from "../../../constants/utilityTypes";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import useUtilityTypes from "../../../hooks/useUtilityTypes";
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
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({
    ids: assetIds,
  });

  const {
    data: utilities,
    isLoading: isUtilitiesLoading,
    error: utilitiesError,
  } = useUtilityTypes();

  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  if (isAreasLoading || isTypesLoading || isAssetsLoading || isUtilitiesLoading)
    return <DashboardCardSkeleton h={300} />;

  if (areasError || typesError || assetsError || utilitiesError) return null;

  const heatUtility = utilities!.find(
    (utility) => utility.name.toLowerCase() === heatType
  );
  const assetsWithConsumptions = assets?.filter(
    (asset) => asset.utilityTypeId !== heatUtility?.id
  );

  return (
    <DashboardCard p={5}>
      <Heading mb={3} size="md">
        Top 15 Bad Actors
      </Heading>
      <Center>
        <LossesByAssetsPieChart assets={assetsWithConsumptions!} />
      </Center>
    </DashboardCard>
  );
};

export default PlantLossesByAssetsCard;
