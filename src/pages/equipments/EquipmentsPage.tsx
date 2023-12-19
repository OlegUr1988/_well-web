import { Box, Container, Heading } from "@chakra-ui/react";
import {
  EquipmentCommandPanel,
  EquipmentsList,
  EquipmentsPagination,
  EquipmentsSearchInput,
} from "../../components/equipments";

const EquipmentsPage = () => {
  return (
    <Container maxW="container.xl">
      <Heading mb={5}>Equipments</Heading>

      <Box mb={5}>
        <EquipmentCommandPanel />
      </Box>

      <Box mb={3}>
        <EquipmentsSearchInput />
      </Box>

      <Box mb={5}>
        <EquipmentsList />
      </Box>

      <EquipmentsPagination />
    </Container>
  );
};

export default EquipmentsPage;
