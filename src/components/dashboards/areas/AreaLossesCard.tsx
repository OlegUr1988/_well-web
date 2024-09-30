import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { heatType } from "../../../constants/utilityTypes";
import { Asset } from "../../../entities/assets";
import { useAssetsByIds } from "../../../hooks/assets";
import useAttributeTypes from "../../../hooks/useAttributeTypes";
import useUtilityTypes from "../../../hooks/useUtilityTypes";
import TotalLossesColumnChart from "../charts/TotalLossesColumnChart";
import {
  AssetsSelectInput,
  DashboardCard,
  DashboardCardSkeleton,
  TotalKPICardHeader,
} from "../common/";

const AreaLossesCard = ({ area }: { area: Asset }) => {
  const [selected, setSelected] = useState<Asset[]>([]);

  const ids = area.children.map((child) => child.id);
  const {
    data: assets,
    isLoading: isAssetsLoading,
    error: assetsError,
  } = useAssetsByIds({ ids });
  const { isLoading: isTypesLoading, error: typesError } = useAttributeTypes();

  const {
    data: utilities,
    isLoading: isUtilitiesLoading,
    error: utilitiesError,
  } = useUtilityTypes();

  if (isAssetsLoading || isTypesLoading || isUtilitiesLoading)
    return <DashboardCardSkeleton h={500} />;

  if (assetsError || typesError || utilitiesError) return null;

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

export default AreaLossesCard;
