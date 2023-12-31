import { Box, Flex } from "@chakra-ui/react";
import { AssetsListView } from "../components/assets";
import { EquipmentsListView } from "../components/equipments";
import { PartsListView } from "../components/parts";
import { ParametersSection } from "../components/parameters";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AssetsListView />
      <EquipmentsListView />
      <PartsListView />
      <Box flex={1} overflowY="auto">
        <ParametersSection />
      </Box>
    </Flex>
  );
};

export default ModelsPage;
