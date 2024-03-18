import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/models/LoadingSpinner";
import { useAssetByName } from "../../hooks/assets";

const AreaLevelDashboard = () => {
  const { areaName } = useParams();
  const { data: area, isLoading, error } = useAssetByName({ name: areaName });

  if (isLoading) return <LoadingSpinner />;

  if (error) return <Heading>Invalid area name provided</Heading>;

  return <Heading>Area level Dashboard</Heading>;
};

export default AreaLevelDashboard;
