import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AssetPanel = () => {
    const baseUrl = 'http://localhost:3000/api/assets'

  return (
    <HStack justify="space-between">
      <Link to="/config/assets/new">
        <Button colorScheme="blue">Create asset</Button>
      </Link>

      <HStack gap={3}>
        <Link to={baseUrl + '/exportToExcel'}>
          <Button colorScheme="green">Export</Button>
        </Link>
        <Link to={baseUrl + '/importFromExcel'}>
          <Button colorScheme="orange">Import</Button>
        </Link>
      </HStack>
    </HStack>
  );
};

export default AssetPanel;
