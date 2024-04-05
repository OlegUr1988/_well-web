import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AreaKPITrends from "../../components/dashboards/AreaKPITrends";
import AreaLevelDashboardHeaderPanel from "../../components/dashboards/AreaLevelDashboardHeaderPanel";
import AreaTotalCards from "../../components/dashboards/AreaTotalCards";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";
import useGetUtilityTypes from "../../hooks/useGetUtilityTypes";
import AreaLossesByAssetsCard from "../../components/dashboards/AreaLossesByAssetsCard";

const AreaLevelDashboard = () => {
  const { areaName } = useParams();
  const types = useGetUtilityTypes();
  const { data: area, isLoading, error } = useAssetByName({ name: areaName });

  if (isLoading) return <LoadingSpinner />;

  if (error) return <Heading>Invalid area name provided</Heading>;

  if (types["plant"] && area?.utilityTypeId !== types["area"].id)
    return <Heading>Invalid asset type provided</Heading>;

  return (
    <Box p={5}>
      <Box mb={5} w={{ base: "100%", xl: "75%" }}>
        <AreaLevelDashboardHeaderPanel area={area!} />
      </Box>
      <SimpleGrid templateColumns={"3fr 1fr"} gridTemplateRows={"1fr"} gap={5}>
        <VStack align="stretch">
          <Box mb={5}>
            <AreaTotalCards area={area!} />
          </Box>
          <AreaKPITrends area={area!} />
        </VStack>
        <VStack align="stretch">
          <AreaLossesByAssetsCard area={area!} />
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default AreaLevelDashboard;
