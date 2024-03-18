import { Box, Container, Heading } from "@chakra-ui/react";
import {
  ConstantSearchInput,
  ConstantsPagination,
} from "../../components/config/constants";
import ConstantsList from "../../components/config/constants/ConstantsList";

const ConstantsPage = () => {
  return (
    <Container maxW="container.xl">
      <Heading mb={5}>Constants</Heading>

      <Box mb={5}>
        <ConstantSearchInput />
      </Box>

      <Box mb={5}>
        <ConstantsList />
      </Box>

      <Box mb={5}>
        <ConstantsPagination />
      </Box>
    </Container>
  );
};

export default ConstantsPage;
