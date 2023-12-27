import { Flex } from "@chakra-ui/react";
import { AssetsListView } from "../components/assets";
import { EquipmentsListView } from "../components/equipments";

const ModelsPage = () => {
  return (
    <Flex h="100%">
      <AssetsListView />
      <EquipmentsListView />
    </Flex>
  );
};

export default ModelsPage;
