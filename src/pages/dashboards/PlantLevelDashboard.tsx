import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PlantConsumptionByUtilityCard from "../../components/dashboards/PlantConsumptionByUtilityCard";
import PlantKPITrends from "../../components/dashboards/PlantKPITrends";
import PlantLevelDashboardHeaderPanel from "../../components/dashboards/PlantLevelDashboardHeaderPanel";
import PlantLossesByAssetsCard from "../../components/dashboards/PlantLossesByAssetsCard";
import PlantTotalCards from "../../components/dashboards/PlantTotalCards";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";
import useGetUtilityTypes from "../../hooks/useGetUtilityTypes";

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
      <SimpleGrid templateColumns={"3fr 1fr"} gridTemplateRows={"1fr"} gap={5}>
        <VStack align="stretch">
          <Box mb={5}>
            <PlantTotalCards plant={plant!} />
          </Box>
          <Box>
            <PlantKPITrends plant={plant!} />
          </Box>
        </VStack>
        <VStack align="stretch">
          <PlantLossesByAssetsCard plant={plant!} />
          <PlantConsumptionByUtilityCard plant={plant!} />
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default PlantLevelDashboard;
