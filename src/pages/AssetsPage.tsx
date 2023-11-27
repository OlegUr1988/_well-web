import { Box, Button, Container, Heading } from "@chakra-ui/react";
import AssetsTable from "../components/AssetsTable";
import { Link } from "react-router-dom";

const AssetsPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Assets</Heading>

        <Box mb={5}>
          <Link to="/config/assets/new">
            <Button colorScheme="blue">Create asset</Button>
          </Link>
        </Box>

        <AssetsTable />
      </Container>
    </>
  );
};

export default AssetsPage;
