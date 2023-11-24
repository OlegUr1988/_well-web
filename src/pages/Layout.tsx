import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box mx={10} my={5}>
      <Outlet />
    </Box>
  );
};

export default Layout;
