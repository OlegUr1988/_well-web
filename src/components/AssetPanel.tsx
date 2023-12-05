import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AssetImport from "./AssetImport";

const AssetPanel = () => {
  const baseUrl = "/api/assets";

  return (
    <HStack justify="space-between">
      <Link to="/config/assets/new">
        <Button colorScheme="blue">Create asset</Button>
      </Link>

      <HStack gap={3}>
        <Link to={baseUrl + "/exportToExcel"} download target="_blank">
          <Button colorScheme="green">Export</Button>
        </Link>
        <AssetImport />
      </HStack>
    </HStack>
  );
};

export default AssetPanel;
