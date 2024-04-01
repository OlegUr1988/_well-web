import { Heading } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import { useAssetsByIds } from "../../hooks/assets";
import useAttributeTypes from "../../hooks/useAttributeTypes";
import TotalLossesColumnChart from "./AreaTotalLossesColumnChart";
import DashboardCard from "./DashboardCard";
import _ from "lodash";

const AreaLossesCard = ({ plant }: { plant: Asset }) => {
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
    <DashboardCard>
      <Heading>Losses</Heading>
      <TotalLossesColumnChart assets={assets!} />
    </DashboardCard>
  );
};

export default AreaLossesCard;
