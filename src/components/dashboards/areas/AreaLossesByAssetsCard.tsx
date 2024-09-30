import { Center, Heading } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import useGetAssetsWithConsumption from "../../../hooks/useGetAssetsWithConsumption";
import { LossesByAssetsPieChart } from "../charts/";
import { DashboardCard, DashboardCardSkeleton } from "../common/";

const AreaLossesByAssetsCard = ({ area }: { area: Asset }) => {
  const ids = area.children.map((child) => child.id);

  const { assetsWithConsumption, isLoading, error } =
    useGetAssetsWithConsumption(ids);

  if (isLoading) return <DashboardCardSkeleton h={300} />;

  if (error) return null;

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

export default AreaLossesByAssetsCard;
