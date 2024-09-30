import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Asset } from "../../../entities/assets";
import useGetAssetsWithConsumption from "../../../hooks/useGetAssetsWithConsumption";
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

  const { assetsWithConsumption, isLoading, error } =
    useGetAssetsWithConsumption(ids);

  if (isLoading) return <DashboardCardSkeleton h={500} />;

  if (error) return null;

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

export default AreaLossesCard;
