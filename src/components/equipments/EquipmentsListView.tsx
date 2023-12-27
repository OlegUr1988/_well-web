import { Heading, VStack } from "@chakra-ui/react";
import { EquipmentsList } from ".";
import { useEquipments } from "../../hooks/equipments";
import ListViewSpinner from "../ListViewSpinner";
import EquipmentsCreateButton from "./EquipmentsCreateButton";
import useModelStore from "../../store/model";

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
      p={2}
      borderRight="1px solid gray"
    >
      <Heading color="white" size="lg" mb={3}>
        Equipments
      </Heading>

      <EquipmentsList equipments={equipments!} />

      <EquipmentsCreateButton assetId={assetId} />
    </VStack>
  );
};

export default EquipmentsListView;
