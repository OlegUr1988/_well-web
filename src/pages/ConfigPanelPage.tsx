import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import SideBar from "../components/SideBar";

const ConfigPanelPage = () => {
  return (
    <Flex direction={"row"} height="100%">
      <SideBar />
      <Flex direction={"column"} flex={1}>
        <Box>
          <NavBar />
        </Box>
        <Box p={3} overflowY="auto" height="100%">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ConfigPanelPage;
