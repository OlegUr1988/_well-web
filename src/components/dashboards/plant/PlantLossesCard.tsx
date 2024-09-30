import { Box } from "@chakra-ui/react";
import _ from "lodash";
import { useState } from "react";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useGetAssetsWithConsumption from "../../../hooks/useGetAssetsWithConsumption";
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
    assetsWithConsumption,
    isLoading: isAssetsLoading,
    error: isAssetsError,
  } = useGetAssetsWithConsumption(assetIds);

  if (isAreasLoading || isAssetsLoading)
    return <DashboardCardSkeleton h={500} />;

  if (areasError || isAssetsError) return null;

  const handleSelect = (values: number[]) => {
    const selectedAssets = assetsWithConsumption!.filter((asset) =>
      values.includes(asset.id)
    );
    setSelected(selectedAssets);
  };

  const filtered = selected.length ? selected : assetsWithConsumption;

  return (
    <DashboardCard p={5}>
      <TotalKPICardHeader label="Bad actors" />
      <Box className="z-level-two" mb={3}>
        <AssetsSelectInput
          assets={assetsWithConsumption!}
          onSelect={handleSelect}
        />
      </Box>
      <Box className="z-level-one">
        <TotalLossesColumnChart assets={filtered!} />
      </Box>
    </DashboardCard>
  );
};

export default PlantLossesCard;
