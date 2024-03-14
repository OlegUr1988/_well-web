import { Box, Flex } from "@chakra-ui/react";
import { AreasListView } from "../../components/models/areas";
import { AssetsListView } from "../../components/models/assets";
import { SubassetAttributesSection } from "../../components/models/attributes";
import { SubassetsListView } from "../../components/models/subassets";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AreasListView />
      <AssetsListView />
      <SubassetsListView />
      <Box flex={1} overflowY="auto">
        <SubassetAttributesSection />
      </Box>
    </Flex>
  );
};

export default ModelsPage;
