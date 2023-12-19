import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VITE_REACT_APP_BASE_URL } from "../envs";

const ExportButton = ({ url }: { url: string }) => {
  return (
    <Link to={VITE_REACT_APP_BASE_URL + url} download target="_blank">
      <Button colorScheme="green">Export</Button>
    </Link>
  );
};

export default ExportButton;
