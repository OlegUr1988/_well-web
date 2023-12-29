import { Box, Container, Heading } from "@chakra-ui/react";
import {
  UnitsCreateButton,
  UnitsList,
  UnitsPagination,
} from "../../components/units";
import UnitSearchInput from "../../components/units/UnitSearchInput";

const PHDTagsPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Units</Heading>

        <Box mb={5} w={100}>
          <UnitsCreateButton />
        </Box>

        <Box mb={3}>
          <UnitSearchInput />
        </Box>

        <Box mb={5}>
          <UnitsList />
        </Box>

        <UnitsPagination />
      </Container>
    </>
  );
};

export default PHDTagsPage;
