import { Box, Flex } from "@chakra-ui/react";
import { AttributesSection } from "../../components/config/attributes";
import { EquipmentsListView } from "../../components/config/equipments";
import { AreasListView } from "../../components/config/models/areas";
import { AssetsListView } from "../../components/config/models/assets";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AreasListView />
      <AssetsListView />
      {/* <EquipmentsListView />
      <Box flex={1} overflowY="auto">
        <AttributesSection />
      </Box> */}
    </Flex>
  );
};

export default ModelsPage;
