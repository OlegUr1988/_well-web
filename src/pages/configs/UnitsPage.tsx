import { Box, Container, Heading } from "@chakra-ui/react";
import {
  UnitSearchInput,
  UnitsCommandPanel,
  UnitsList,
  UnitsPagination,
} from "../../components/config/units";

const PHDTagsPage = () => {
  return (
      <Container maxW="container.xl">
        <Heading mb={5}>Units</Heading>

        <Box mb={5}>
          <UnitsCommandPanel />
        </Box>

        <Box mb={3}>
          <UnitSearchInput />
        </Box>

        <Box mb={5}>
          <UnitsList />
        </Box>

        <UnitsPagination />
      </Container>
  );
};

export default PHDTagsPage;
