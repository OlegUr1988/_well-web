import { Box, Heading, VStack } from "@chakra-ui/react";
import { useEquipments } from "../../hooks/equipments";
import useModelStore from "../../store/model";
import ListViewSpinner from "../ListViewSpinner";
import EquipmentCreateButton from "./EquipmentCreateButton";
import EquipmentsList from "./EquipmentsList";

const EquipmentsListView = () => {
  const { assetId } = useModelStore((s) => s.modelQuery);
  const { data: equipments, isLoading, error } = useEquipments({ assetId });
  if (assetId == 0) return null;

  if (isLoading) return <ListViewSpinner />;

  if (error) return null;

  return (
    <VStack
      h="100%"
      width={250}
      bgColor="gray.700"
      alignItems="start"
      borderRight="1px solid gray"
    >
      <Heading color="white" size="lg" px={2} my={3}>
        Equipments
      </Heading>

      <EquipmentsList equipments={equipments!} />

      <Box p={2} w="100%">
        <EquipmentCreateButton assetId={assetId} />
      </Box>
    </VStack>
  );
};

export default EquipmentsListView;
