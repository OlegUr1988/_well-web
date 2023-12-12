import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EquipmentPanel = () => {
  return (
    <Link to="/config/equipments/new">
      <Button colorScheme="blue">Create equipment</Button>
    </Link>
  );
};

export default EquipmentPanel;
