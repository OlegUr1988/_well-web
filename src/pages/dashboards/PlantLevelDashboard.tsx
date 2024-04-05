import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../components/common/";
import {
  PlantConsumptionByUtilityCard,
  PlantKPITrends,
  PlantLevelDashboardHeaderPanel,
  PlantLossesByAssetsCard,
  PlantTotalCards,
} from "../../components/dashboards/plant/";
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
          <PlantKPITrends plant={plant!} />
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
