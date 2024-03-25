import { Heading } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import { useAssetsByIds } from "../../hooks/assets";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import AreaTotalLossesColumnChart from "./AreaTotalLossesColumnChart";
import DashboardCard from "./DashboardCard";

const AreaLossesCard = ({ area }: { area: Asset }) => {
  const ids = area.children.map((child) => child.id);
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({ ids });
  const {
    data: types,
    isLoading: isTypesLoading,
    error: typesError,
  } = useAttributeTypes();

  if (isAssetsLoading || isTypesLoading) return null;

  if (assetsError || typesError) return null;

  return (
    <DashboardCard>
      <Heading>Losses</Heading>
      <AreaTotalLossesColumnChart assets={assets!} types={types!} />
    </DashboardCard>
  );
};

export default AreaLossesCard;
