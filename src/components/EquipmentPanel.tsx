import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EquipmentsExportButton from "./EquipmentsExportButton";
import EquipmentsImportButton from "./EquipmentsImportButton";

const EquipmentPanel = () => {
  return (
    <HStack justify="space-between">
      <Link to="/config/equipments/new">
        <Button colorScheme="blue">Create equipment</Button>
      </Link>

      <HStack gap={3}>
        <EquipmentsExportButton />
        <EquipmentsImportButton />
      </HStack>
    </HStack>
  );
};

export default EquipmentPanel;
