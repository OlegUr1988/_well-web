import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PlantLevelDashboardHeaderPanel from "../../components/dashboards/PlantLevelDashboardHeaderPanel";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";
import useGetUtilityTypes from "../../hooks/useGetUtilityTypes";
import PlantTotalCards from "../../components/dashboards/PlantTotalCards";
import PlantLossesCard from "../../components/dashboards/PlantLossesCard";
import PlantTotalKPITrendCard from "../../components/dashboards/TotalKPITrendCard";

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

      <SimpleGrid templateColumns={"4fr 1fr"} gridTemplateRows={"1fr"} gap={5}>
        <PlantLossesCard plant={plant!} />
      </SimpleGrid>
      <PlantTotalKPITrendCard plant={plant!} />
    </Box>
  );
};

export default PlantLevelDashboard;
