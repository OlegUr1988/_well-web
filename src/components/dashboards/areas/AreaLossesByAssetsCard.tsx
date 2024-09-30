import { Center, Heading } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import { LossesByAssetsPieChart } from "../charts/";
import { DashboardCard, DashboardCardSkeleton } from "../common/";
import useUtilityTypes from "../../../hooks/useUtilityTypes";
import { heatType } from "../../../constants/utilityTypes";

const AreaLossesByAssetsCard = ({ area }: { area: Asset }) => {
  const ids = area.children.map((child) => child.id);
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({ ids });
  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  const {
    data: utilities,
    isLoading: isUtilitiesLoading,
    error: utilitiesError,
  } = useUtilityTypes();

  if (isAssetsLoading || isTypesLoading || isUtilitiesLoading)
    return <DashboardCardSkeleton h={300} />;

  if (assetsError || typesError || utilitiesError) return null;

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

export default AreaLossesByAssetsCard;
