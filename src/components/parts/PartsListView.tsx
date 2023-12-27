import { Box, Heading, VStack } from "@chakra-ui/react";
import useModelStore from "../../store/model";
import ListViewSpinner from "../ListViewSpinner";
import { useParts } from "../../hooks/parts";

const PartsListView = () => {
  const { equipmentId } = useModelStore((s) => s.modelQuery);
  const { data: parts, isLoading, error } = useParts({ equipmentId });
  if (equipmentId == 0) return null;

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
        Equipment Parts
      </Heading>

      {/* <EquipmentsList equipments={equipments!} /> */}

      <Box p={2} w="100%">
        {/* <EquipmentsCreateButton assetId={assetId} /> */}
      </Box>
    </VStack>
  );
};

export default PartsListView;
