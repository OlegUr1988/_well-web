import { useParams } from "react-router-dom";
import DashboardHeaderPanel from "../components/DashboardHeaderPanel";
import { Box } from "@chakra-ui/react";

const DashboardPage = () => {
  const { areaName, assetName } = useParams();

  return (
    <Box p={5}>
      <DashboardHeaderPanel areaName={areaName!} assetName={assetName!} />
    </Box>
  );
};

export default DashboardPage;
