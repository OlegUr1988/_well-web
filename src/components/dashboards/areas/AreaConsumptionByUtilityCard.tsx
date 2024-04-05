import { Center, Heading } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import ConsumptionsDonutChart from "../ConsumptionsDonutChart";
import DashboardCard from "../DashboardCard";

const AreaConsumptionByUtilityCard = ({ area }: { area: Asset }) => {
  const ids = area.children.map((child) => child.id);
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({ ids });

  if (isAssetsLoading) return null;

  if (assetsError) return null;

  return (
    <DashboardCard p={5}>
      <Heading size="md">Energy consumption by Utility</Heading>
      <Center>
        <ConsumptionsDonutChart assets={assets!} />
      </Center>
    </DashboardCard>
  );
};

export default AreaConsumptionByUtilityCard;
