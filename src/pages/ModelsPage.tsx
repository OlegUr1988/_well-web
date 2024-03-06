import { Box, Flex } from "@chakra-ui/react";
import { AreasListView } from "../components/config/areas";
import { AssetsListView } from "../components/config/assets";
import { AttributesSection } from "../components/config/attributes";
import { EquipmentsListView } from "../components/config/equipments";

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
