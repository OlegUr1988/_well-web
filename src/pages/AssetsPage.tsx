import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AssetsTable from "../components/AssetsTable";
import useAssets from "../hooks/useAssets";

const AssetsPage = () => {
  const { data: assets } = useAssets();

  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Assets</Heading>

        <Box mb={5}>
          <Link to="/config/assets/new">
            <Button colorScheme="blue">Create asset</Button>
          </Link>
        </Box>

        <AssetsTable assets={assets!} />
      </Container>
    </>
  );
};

export default AssetsPage;
