import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VITE_REACT_APP_BASE_URL } from "../envs";

const EquipmentsExportButton = () => {
  return (
    <Link
      to={VITE_REACT_APP_BASE_URL + "/equipments/exportToExcel"}
      download
      target="_blank"
    >
      <Button colorScheme="green">Export</Button>
    </Link>
  );
};

export default EquipmentsExportButton;
