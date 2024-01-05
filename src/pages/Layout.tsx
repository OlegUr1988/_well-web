import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";

const Layout = () => {
  return (
    <Flex direction="column" height="100%">
      <Box>
        <NavBar />
      </Box>
      <Box flex={1} height="100%">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
