import { Heading } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import { useAssetsByIds } from "../../hooks/assets";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import AreaTotalLossesColumnChart from "./AreaTotalLossesColumnChart";
import DashboardCard from "./DashboardCard";

const AreaLossesCard = ({ plant }: { plant: Asset }) => {
  const areaIds = plant.children.map((child) => child.id);
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({ ids: areaIds });
  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  if (isAssetsLoading || isTypesLoading) return null;

  if (assetsError || typesError) return null;

  return (
    <DashboardCard>
      <Heading>Losses</Heading>
      <AreaTotalLossesColumnChart assets={assets!} />
    </DashboardCard>
  );
};

export default AreaLossesCard;
