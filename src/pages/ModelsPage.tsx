import { Box, Flex } from "@chakra-ui/react";
import { AreasListView } from "../components/areas";
import { AssetsListView } from "../components/assets";
import { EquipmentsListView } from "../components/equipments";
import { ParametersSection } from "../components/parameters";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AreasListView />
      <AssetsListView />
      <EquipmentsListView />
      <Box flex={1} overflowY="auto">
        <ParametersSection />
      </Box>
    </Flex>
  );
};

export default ModelsPage;
