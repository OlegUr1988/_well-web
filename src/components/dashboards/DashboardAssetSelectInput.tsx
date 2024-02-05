import { Text, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useNavigate } from "react-router-dom";
import { DashboardCard } from ".";
import { Area } from "../../entities/areas";
import { Asset } from "../../entities/assets";
import { useAssets } from "../../hooks/assets";

const DashboardAssetSelectInput = ({
  area,
  asset,
}: {
  area: Area;
  asset: Asset;
}) => {
  const { data: assets, isLoading, error } = useAssets({});
  const navigate = useNavigate();

  if (isLoading) return null;

  if (error) return null;

  const options = assets?.map((asset) => ({
    value: asset.id,
    label: asset.name,
  }));

  const defaultValue = { value: asset.id, label: asset.name };

  return (
    <DashboardCard>
      <VStack gap={0} align="start" rowGap={1}>
        <Text fontSize={16}>Select Asset:</Text>
        <Select
          defaultValue={defaultValue}
          onChange={(option) =>
            navigate(`/dashboards/${area.name}/${option?.label}`)
          }
          options={options}
        />
      </VStack>
    </DashboardCard>
  );
};

export default DashboardAssetSelectInput;
