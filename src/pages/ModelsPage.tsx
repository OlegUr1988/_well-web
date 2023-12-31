import { Flex } from "@chakra-ui/react";
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
      <ParametersSection />
    </Flex>
  );
};

export default ModelsPage;
