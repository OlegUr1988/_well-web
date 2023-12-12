import { Box, Container, Heading, Skeleton } from "@chakra-ui/react";
import EquipmentPanel from "../components/EquipmentPanel";
import EquipmentsTable from "../components/EquipmentsTable";
import useEquipments from "../hooks/useEquipments";
import useEquipmentStore from "../store/equipments";
import Pagination from "../components/Pagination";

const EquipmentsPage = () => {
  const { page, pageSize } = useEquipmentStore((s) => s.equipmentQuery);
  const setPage = useEquipmentStore((s) => s.setPage);

  const {
    data: equipments,
    isLoading,
    error,
  } = useEquipments({ page, pageSize });

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

      {equipments?.count! > pageSize! && (
        <Pagination
          page={page!}
          count={equipments?.count!}
          pageSize={pageSize!}
          onFirstPagePress={() => setPage(1)}
          onPreviousPagePress={() => setPage(page! - 1)}
          onNextPagePress={() => setPage(page! + 1)}
          onLastPagePress={() =>
            setPage(Math.ceil(equipments?.count! / pageSize!))
          }
        />
      )}
    </Container>
  );
};

export default EquipmentsPage;
