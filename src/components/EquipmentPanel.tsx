import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EquipmentsExportButton from "./EquipmentsExportButton";

const EquipmentPanel = () => {
  return (
    <HStack justify="space-between">
      <Link to="/config/equipments/new">
        <Button colorScheme="blue">Create equipment</Button>
      </Link>

      <EquipmentsExportButton />
    </HStack>
  );
};

export default EquipmentPanel;
