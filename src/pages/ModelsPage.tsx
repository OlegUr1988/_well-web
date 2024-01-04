import { Box, Flex } from "@chakra-ui/react";
import { AreasListView } from "../components/areas";
import { EquipmentsListView } from "../components/equipments";
import { ParametersSection } from "../components/parameters";
import { PartsListView } from "../components/parts";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AreasListView />
      <EquipmentsListView />
      <PartsListView />
      <Box flex={1} overflowY="auto">
        <ParametersSection />
      </Box>
    </Flex>
  );
};

export default ModelsPage;
