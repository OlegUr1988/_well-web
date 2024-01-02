import { Box, Container, Heading } from "@chakra-ui/react";
import {
  PHDTagsCommandPanel,
  PHDTagsList,
  PHDTagsPagination,
  PHDTagsSearchInput,
} from "../../components/PHDTags";

const PHDTagsPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>PHD Tags</Heading>

        <Box mb={5}>
          <PHDTagsCommandPanel />
        </Box>

        <Box mb={3}>
          <PHDTagsSearchInput />
        </Box>

        <Box mb={5}>
          <PHDTagsList />
        </Box>

        <PHDTagsPagination />
      </Container>
    </>
  );
};

export default PHDTagsPage;
