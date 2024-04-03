import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PlantKPITrends from "../../components/dashboards/PlantKPITrends";
import PlantLevelDashboardHeaderPanel from "../../components/dashboards/PlantLevelDashboardHeaderPanel";
import PlantTotalCards from "../../components/dashboards/PlantTotalCards";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";
import useGetUtilityTypes from "../../hooks/useGetUtilityTypes";
import PlantLossesByAssetsCard from "../../components/dashboards/PlantLossesByAssetsCard";

const PlantLevelDashboard = () => {
  const { plantName } = useParams();
  const types = useGetUtilityTypes();
  const { data: plant, isLoading, error } = useAssetByName({ name: plantName });

  if (isLoading) return <LoadingSpinner />;

  if (error) return <Heading>Invalid plant name provided</Heading>;

  if (types["plant"] && plant?.utilityTypeId !== types["plant"].id)
    return <Heading>Invalid asset type provided</Heading>;

  return (
    <Box p={5}>
      <Box mb={5}>
        <PlantLevelDashboardHeaderPanel />
      </Box>

      <Box mb={5}>
        <PlantTotalCards plant={plant!} />
      </Box>

      <SimpleGrid templateColumns={"3fr 1fr"} gridTemplateRows={"1fr"} gap={5}>
        <PlantKPITrends plant={plant!} />
        <VStack align="stretch">
          <PlantLossesByAssetsCard plant={plant!} />
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default PlantLevelDashboard;
