import { Box, Flex } from "@chakra-ui/react";
import { AttributesSection } from "../../components/models/attributes";
import { AreasListView } from "../../components/models/areas";
import { AssetsListView } from "../../components/models/assets";
import { SubassetsListView } from "../../components/models/subassets";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AreasListView />
      <AssetsListView />
      <SubassetsListView />
      <Box flex={1} overflowY="auto">
        <AttributesSection />
      </Box>
    </Flex>
  );
};

export default ModelsPage;
