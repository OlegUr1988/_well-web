import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Asset } from "../../../entities/assets";
import useAssetsLosses from "../../../hooks/useAssetsLosses";
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

  const { assets, isLoading, error } = useAssetsLosses(ids);

  if (isLoading) return <DashboardCardSkeleton h={500} />;

  if (error) return null;

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

export default AreaLossesCard;
