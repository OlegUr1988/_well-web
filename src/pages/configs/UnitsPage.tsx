import { Box, Container, Heading } from "@chakra-ui/react";
import {
  UnitsCommandPanel,
  UnitsList,
  UnitsPagination,
} from "../../components/config/units";
import UnitSearchInput from "../../components/config/units/UnitSearchInput";

const PHDTagsPage = () => {
  return (
    <>
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
    </>
  );
};

export default PHDTagsPage;
