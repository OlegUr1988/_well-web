import { Box, Flex } from "@chakra-ui/react";
import { AreasListView } from "../../components/models/areas";
import { AssetsListView } from "../../components/models/assets";
import {
  AreaAttributesSection,
  SubassetAttributesSection,
} from "../../components/models/attributes";
import { SubassetsListView } from "../../components/models/subassets";
import useModelStore from "../../store/model";

const ModelsPage = () => {
  const { areaId, assetId, subassetId } = useModelStore((s) => s.modelQuery);

  const showAreaAttriubes = () => areaId !== 0 && assetId === 0;
  const showSubassetAttributes = () => assetId !== 0;
  return (
    <Flex h="100%">
      <AreasListView />
      <AssetsListView />
      <SubassetsListView />
      {showAreaAttriubes() && (
        <Box flex={1} overflowY="auto">
          <AreaAttributesSection />
        </Box>
      )}
      {showSubassetAttributes() && (
        <Box flex={1} overflowY="auto">
          <SubassetAttributesSection />
        </Box>
      )}
    </Flex>
  );
};

export default ModelsPage;
