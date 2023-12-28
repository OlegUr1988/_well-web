import { Box, Container, Heading } from "@chakra-ui/react";
import { UnitsList } from "../../components/units";
import UnitsCreateButton from "../../components/units/UnitsCreateButton";

const PHDTagsPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Units</Heading>

        <Box mb={5} w={100}>
          <UnitsCreateButton />
        </Box>

        <Box mb={3}>{/* <PHDTagsSearchInput /> */}</Box>

        <Box mb={5}>
          <UnitsList />
        </Box>

        {/* <PHDTagsPagination /> */}
      </Container>
    </>
  );
};

export default PHDTagsPage;
