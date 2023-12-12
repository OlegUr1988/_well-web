import { Box, Heading } from "@chakra-ui/react";
import NewEquipmentForm from "../components/NewEquipmentForm";

const NewEquipmentPage = () => {
  return (
    <Box h="100%">
      <Heading mb={5}>New Equipment</Heading>

      <NewEquipmentForm />
    </Box>
  );
};

export default NewEquipmentPage;
