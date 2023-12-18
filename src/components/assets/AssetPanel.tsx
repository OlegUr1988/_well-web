import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AssetsImportButton from "./AssetsImportButton";
import AssetsExportButton from "./AssetsExportButton";

const AssetPanel = () => {
  return (
    <HStack justify="space-between">
      <Link to="/config/assets/new">
        <Button colorScheme="blue">Create asset</Button>
      </Link>

      <HStack gap={3}>
        <AssetsExportButton />
        <AssetsImportButton />
      </HStack>
    </HStack>
  );
};

export default AssetPanel;
