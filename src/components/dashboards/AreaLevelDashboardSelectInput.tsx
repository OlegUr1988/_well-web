import { Box, Text, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { DashboardCard } from ".";
import { Asset } from "../../entities/assets";
import { useAssets } from "../../hooks/assets";
import DashboardAssetSelectInputSkeleton from "./DashboardAssetSelectInputSkeleton";

const AreaLevelDashboardSelectInput = ({ area }: { area: Asset }) => {
  const { data: assets, isLoading, error } = useAssets({});
  const navigate = useNavigate();

  if (isLoading) return <DashboardAssetSelectInputSkeleton />;

  if (error) return null;

  const areas = assets?.filter((asset) => _.isNull(asset.parentAssetId));

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
            onChange={(option) => navigate(`/dashboards/${option?.label}`)}
            options={options}
            size="sm"
          />
        </Box>
      </VStack>
    </DashboardCard>
  );
};

export default AreaLevelDashboardSelectInput;
