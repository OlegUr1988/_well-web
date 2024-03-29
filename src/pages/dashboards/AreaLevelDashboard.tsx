import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AreaLevelDashboardHeaderPanel from "../../components/dashboards/AreaLevelDashboardHeaderPanel";
import AreaLossesCard from "../../components/dashboards/AreaLossesCard";
import AreaTotalCards from "../../components/dashboards/AreaTotalCards";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";
import useUtilityTypes from "../../hooks/useUtilityTypes";

const AreaLevelDashboard = () => {
  const { areaName } = useParams();
  const { data: types } = useUtilityTypes();
  const { data: area, isLoading, error } = useAssetByName({ name: areaName });

  const areaType = types?.find((type) => type.name.toLowerCase() === "area");

  if (isLoading) return <LoadingSpinner />;

  if (error) return <Heading>Invalid area name provided</Heading>;

  if (area?.utilityTypeId !== areaType?.id)
    return <Heading>Invalid asset type provided</Heading>;

  return (
    <Box p={5}>
      <Box mb={5} w={{ base: "100%", xl: "75%" }}>
        <AreaLevelDashboardHeaderPanel area={area!} />
      </Box>

      <Box mb={5}>
        <AreaTotalCards area={area!} />
      </Box>

      <SimpleGrid templateColumns={"4fr 1fr"} gridTemplateRows={"1fr"} gap={5}>
        <AreaLossesCard area={area!} />
      </SimpleGrid>
    </Box>
  );
};

export default AreaLevelDashboard;
