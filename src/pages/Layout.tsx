import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <Box mb={5}>
        <NavBar />
      </Box>
      <Box mx={10} my={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
