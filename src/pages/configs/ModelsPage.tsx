import { Box, Flex } from "@chakra-ui/react";
import { AttributesSection } from "../../components/config/attributes";
import { EquipmentsListView } from "../../components/config/equipments";
import { AreasListView } from "../../components/config/models/areas";
import { AssetsListView } from "../../components/config/models/assets";
import { SubassetsListView } from "../../components/config/models/subassets";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AreasListView />
      <AssetsListView />
      <SubassetsListView />
      {/* <Box flex={1} overflowY="auto">
        <AttributesSection />
      </Box> */}
    </Flex>
  );
};

export default ModelsPage;
