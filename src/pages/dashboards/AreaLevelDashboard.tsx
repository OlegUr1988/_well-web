import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AreaLevelDashboardHeaderPanel from "../../components/dashboards/AreaLevelDashboardHeaderPanel";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";

const AreaLevelDashboard = () => {
  const { areaName } = useParams();
  const { data: area, isLoading, error } = useAssetByName({ name: areaName });

  if (isLoading) return <LoadingSpinner />;

  if (error) return <Heading>Invalid area name provided</Heading>;

  return (
    <Box p={5}>
      <Box mb={5}>
        <AreaLevelDashboardHeaderPanel area={area!} />
      </Box>
    </Box>
  );
};

export default AreaLevelDashboard;
