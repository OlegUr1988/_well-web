import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AuthContainer from "../components/AuthContainer";
import { NavBar } from "../components/common/";

const Layout = () => {
  return (
    <AuthContainer>
      <Flex direction="column" height="100%">
        <Box>
          <NavBar />
        </Box>
        <Box flex={1} height="100%">
          <Outlet />
        </Box>
      </Flex>
    </AuthContainer>
  );
};

export default Layout;
