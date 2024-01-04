import { Box, Flex } from "@chakra-ui/react";
import { AreasListView } from "../components/areas";
import { AssetsListView } from "../components/assets";
import { AttributesSection } from "../components/attributes";
import { EquipmentsListView } from "../components/equipments";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AreasListView />
      <AssetsListView />
      <EquipmentsListView />
      <Box flex={1} overflowY="auto">
        <AttributesSection />
      </Box>
    </Flex>
  );
};

export default ModelsPage;
