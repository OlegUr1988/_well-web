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
import useUtilityTypes from "../../../hooks/useUtilityTypes";
import { heatType } from "../../../constants/utilityTypes";

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

  const {
    data: utilities,
    isLoading: isUtilitiesLoading,
    error: utilitiesError,
  } = useUtilityTypes();

  if (isAreasLoading || isTypesLoading || isAssetsLoading || isUtilitiesLoading)
    return <DashboardCardSkeleton h={500} />;

  if (areasError || typesError || assetsError || utilitiesError) return null;

  const heatUtility = utilities!.find(
    (utility) => utility.name.toLowerCase() === heatType
  );
  const assetsWithConsumptions = assets?.filter(
    (asset) => asset.utilityTypeId !== heatUtility?.id
  );

  const handleSelect = (values: number[]) => {
    const selectedAssets = assetsWithConsumptions!.filter((asset) =>
      values.includes(asset.id)
    );
    setSelected(selectedAssets);
  };

  const filtered = selected.length ? selected : assetsWithConsumptions;

  return (
    <DashboardCard p={5}>
      <TotalKPICardHeader label="Bad actors" />
      <Box className="z-level-two" mb={3}>
        <AssetsSelectInput
          assets={assetsWithConsumptions!}
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
