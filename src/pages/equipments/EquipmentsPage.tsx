import { Box, Container, Heading, Skeleton } from "@chakra-ui/react";
import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchInput";
import { EquipmentPanel, EquipmentsTable } from "../../components/equipments/";
import { useEquipments } from "../../hooks/equipments";
import useEquipmentStore from "../../store/equipments";

const EquipmentsPage = () => {
  const { page, pageSize, searchedName } = useEquipmentStore(
    (s) => s.equipmentQuery
  );
  const setSearchedName = useEquipmentStore((s) => s.setSearchedName);
  const setPage = useEquipmentStore((s) => s.setPage);

  const {
    data: equipments,
    isLoading,
    error,
  } = useEquipments({ page, pageSize, searchedName });

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };

  if (error) return null;

  return (
    <Container maxW="container.xl">
      <Heading mb={5}>Equipments</Heading>

      <Box mb={5}>
        <EquipmentPanel />
      </Box>

      <Box mb={3}>
        <SearchInput
          placeholder="Search by equipment or asset..."
          onSearch={(e) => handleSearch(e)}
        />
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
