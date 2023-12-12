import { Box, Container, Heading, Skeleton } from "@chakra-ui/react";
import EquipmentPanel from "../components/EquipmentPanel";
import EquipmentsTable from "../components/EquipmentsTable";
import useEquipments from "../hooks/useEquipments";

const EquipmentsPage = () => {
  const { data: equipments, isLoading, error } = useEquipments();

  if (error) return null;

  return (
    <Container maxW="container.xl">
      <Heading mb={5}>Equipments</Heading>

      <Box mb={5}>
        <EquipmentPanel />
      </Box>

      <Box mb={5}>
        {isLoading ? (
          <Skeleton h={400} borderRadius={10} />
        ) : (
          <EquipmentsTable equipments={equipments?.results!} />
        )}
      </Box>
    </Container>
  );
};

export default EquipmentsPage;
