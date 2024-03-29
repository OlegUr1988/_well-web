import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PlantLevelDashboardHeaderPanel from "../../components/dashboards/PlantLevelDashboardHeaderPanel";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";
import useGetUtilityTypes from "../../hooks/useGetUtilityTypes";
import PlantTotalCards from "../../components/dashboards/PlantTotalCards";

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
    </Box>
  );
};

export default PlantLevelDashboard;
