import { Center, Heading } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import { LossesByAssetsPieChart } from "../charts/";
import { DashboardCard, DashboardCardSkeleton } from "../common/";

const AreaLossesByAssetsCard = ({ area }: { area: Asset }) => {
  const ids = area.children.map((child) => child.id);
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({ ids });
  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  if (isAssetsLoading || isTypesLoading)
    return <DashboardCardSkeleton h={300} />;

  if (assetsError || typesError) return null;

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

export default AreaLossesByAssetsCard;
