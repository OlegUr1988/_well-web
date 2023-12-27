import { Heading, VStack } from "@chakra-ui/react";
import { useEquipments } from "../../hooks/equipments";
import ListViewSpinner from "../ListViewSpinner";
import { EquipmentsList } from ".";

const EquipmentsListView = () => {
  const { data: equipments, isLoading, error } = useEquipments({ assetId: 2 });

  if (isLoading) return <ListViewSpinner />;

  if (error) return null;

  return (
    <VStack
      h="100%"
      width={250}
      bgColor="gray.700"
      alignItems="start"
      p={2}
      borderRight="1px solid gray"
    >
      <Heading color="white" size="lg" mb={3}>
        Equipments
      </Heading>

      <EquipmentsList equipments={equipments!} />

      {/* <AssetCreateButton /> */}
    </VStack>
  );
};

export default EquipmentsListView;
