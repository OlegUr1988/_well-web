import { Box, Text, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useNavigate } from "react-router-dom";
import { DashboardCard } from ".";
import { Area } from "../../entities/areas";
import { Asset } from "../../entities/assets";
import { useAssets } from "../../hooks/assets";
import DashboardAssetSelectInputSkeleton from "./DashboardAssetSelectInputSkeleton";

const DashboardAssetSelectInput = ({
  area,
  asset,
}: {
  area: Area;
  asset: Asset;
}) => {
  const { data: assets, isLoading, error } = useAssets({});
  const navigate = useNavigate();

  if (isLoading) return <DashboardAssetSelectInputSkeleton />;

  if (error) return null;

  const options = assets?.map((asset) => ({
    value: asset.id,
    label: asset.name,
  }));

  const defaultValue = { value: asset.id, label: asset.name };

  return (
    <DashboardCard>
      <VStack align="start">
        <Text fontSize={14} fontWeight={600}>
          Select Asset:
        </Text>
        <Box w="100%">
          <Select
            defaultValue={defaultValue}
            onChange={(option) =>
              navigate(`/dashboards/${area.name}/${option?.label}`)
            }
            options={options}
            size="sm"
          />
        </Box>
      </VStack>
    </DashboardCard>
  );
};

export default DashboardAssetSelectInput;
