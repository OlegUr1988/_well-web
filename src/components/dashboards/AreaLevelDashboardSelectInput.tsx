import { Box, Text, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useNavigate } from "react-router-dom";
import { DashboardCard } from ".";
import { Asset } from "../../entities/assets";
import { useAssets } from "../../hooks/assets";
import useUtilityTypes from "../../hooks/useUtilityTypes";
import DashboardAssetSelectInputSkeleton from "./DashboardAssetSelectInputSkeleton";

const AreaLevelDashboardSelectInput = ({ area }: { area: Asset }) => {
  const { data: types } = useUtilityTypes();
  const { data: assets, isLoading, error } = useAssets({});
  const navigate = useNavigate();

  if (isLoading) return <DashboardAssetSelectInputSkeleton />;

  if (error) return null;

  const areaType = types?.find((type) => type.name.toLowerCase() === "area");

  const areas = assets?.filter((asset) => asset.utilityTypeId === areaType?.id);

  const options = areas?.map((area) => ({
    value: area.id,
    label: area.name,
  }));

  const defaultValue = { value: area.id, label: area.name };

  return (
    <DashboardCard>
      <VStack align="start">
        <Text fontSize={14} fontWeight={600}>
          Select Asset:
        </Text>
        <Box w="100%">
          <Select
            defaultValue={defaultValue}
            onChange={(option) => navigate(`/dashboards/areas/${option?.label}`)}
            options={options}
            size="sm"
          />
        </Box>
      </VStack>
    </DashboardCard>
  );
};

export default AreaLevelDashboardSelectInput;
