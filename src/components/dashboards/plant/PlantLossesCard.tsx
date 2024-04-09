import { Box } from "@chakra-ui/react";
import _ from "lodash";
import { useState } from "react";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import TotalLossesColumnChart from "../charts/TotalLossesColumnChart";
import {
  AssetsSelectInput,
  DashboardCard,
  DashboardCardSkeleton,
  TotalKPICardHeader,
} from "../common/";

const PlantLossesCard = ({ plant }: { plant: Asset }) => {
  const [selected, setSelected] = useState<Asset[]>([]);

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

  if (isAreasLoading || isTypesLoading || isAssetsLoading)
    return <DashboardCardSkeleton h={500} />;

  if (areasError || typesError || assetsError) return null;

  const handleSelect = (values: number[]) => {
    const selectedAssets = assets!.filter((asset) => values.includes(asset.id));
    setSelected(selectedAssets);
  };

  const filtered = selected.length ? selected : assets;

  return (
    <DashboardCard p={5}>
      <TotalKPICardHeader label="Bad actors" />
      <Box className="z-level-two" mb={3}>
        <AssetsSelectInput assets={assets!} onSelect={handleSelect} />
      </Box>
      <Box className="z-level-one">
        <TotalLossesColumnChart assets={filtered!} />
      </Box>
    </DashboardCard>
  );
};

export default PlantLossesCard;
