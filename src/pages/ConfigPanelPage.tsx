import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const ConfigPanelPage = () => {
  return (
    <Flex direction={"row"} height="100%">
      <SideBar />
      <Flex direction={"column"} flex={1}>
        <Box>
          <NavBar />
        </Box>
        <Box p={3} overflowY="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ConfigPanelPage;
