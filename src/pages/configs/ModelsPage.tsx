import { Box, Flex } from "@chakra-ui/react";
import { AreasListView } from "../../components/models/areas";
import { AssetsListView } from "../../components/models/assets";
import {
  AreaAttributesSection,
  AssetAttributesSection,
  SubassetAttributesSection,
} from "../../components/models/attributes";
import { SubassetsListView } from "../../components/models/subassets";
import useModelStore from "../../store/model";
import { PlantsListView } from "../../components/models/plants";
import PlantAttributesSection from "../../components/models/attributes/PlantAttributesSection";

const ModelsPage = () => {
  const { plantId, areaId, assetId, subassetId } = useModelStore(
    (s) => s.modelQuery
  );

  const showPlantAttriubes = () => plantId !== 0 && areaId === 0;
  const showAreaAttriubes = () => areaId !== 0 && assetId === 0;
  const showAssetAttributs = () => assetId !== 0 && subassetId === 0;
  const showSubassetAttributes = () => assetId !== 0 && subassetId !== 0;
  return (
    <Flex h="100%">
      <PlantsListView />
      <AreasListView />
      <AssetsListView />
      <SubassetsListView />
      {showPlantAttriubes() && (
        <Box flex={1} overflowY="auto">
          <PlantAttributesSection />
        </Box>
      )}
      {showAreaAttriubes() && (
        <Box flex={1} overflowY="auto">
          <AreaAttributesSection />
        </Box>
      )}
      {showAssetAttributs() && (
        <Box flex={1} overflowY="auto">
          <AssetAttributesSection />
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
