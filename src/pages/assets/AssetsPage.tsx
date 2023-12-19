import { Box, Container, Heading } from "@chakra-ui/react";
import {
  AssetsCommandPanel,
  AssetsList,
  AssetsPagination,
  AssetsSearchInput,
} from "../../components/assets";

const AssetsPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Assets</Heading>

        <Box mb={5}>
          <AssetsCommandPanel />
        </Box>

        <Box mb={3}>
          <AssetsSearchInput />
        </Box>

        <Box mb={5}>
          <AssetsList />
        </Box>

        <AssetsPagination />
      </Container>
    </>
  );
};

export default AssetsPage;
