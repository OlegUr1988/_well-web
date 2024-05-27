import { Center, Heading } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import { ConsumptionsDonutChart } from "../charts/";
import {
  DashboardCard,
  DashboardCardSkeleton,
  MessageComponent,
} from "../common/";

const AreaConsumptionByUtilityCard = ({ area }: { area: Asset }) => {
  const ids = area.children.map((child) => child.id);
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({ ids });

  if (isAssetsLoading) return <DashboardCardSkeleton h={300} />;

  if (assetsError) return null;

  return (
    <DashboardCard p={5}>
      <Heading size="md">Energy consumption by Utility</Heading>
      <Center>
        {area.children.length ? (
          <ConsumptionsDonutChart assets={assets!} />
        ) : (
          <MessageComponent height={330} message="The Data is not available" />
        )}
      </Center>
    </DashboardCard>
  );
};

export default AreaConsumptionByUtilityCard;
