import { Box, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import useModelStore from "../../../store/model";
import useUserStore from "../../../store/user";
import ListViewLinkIcon from "../ListViewLinkIcon";
import PlantDeleteButton from "./PlantDeleteButton";
import PlantEditButton from "./PlantEditButton";

const PlantsList = ({ plants }: { plants: Asset[] }) => {
  const { plantId } = useModelStore((s) => s.modelQuery);
  const setPlantId = useModelStore((s) => s.setPlantId);
  const setAreaId = useModelStore((s) => s.setAreaId);
  const setAssetId = useModelStore((s) => s.setAssetId);
  const setEquipmentId = useModelStore((s) => s.setSubassetId);
  const user = useUserStore((s) => s.user);

  const handleSelect = (id: number) => {
    setPlantId(id);
    setAreaId(0);
    setAssetId(0);
    setEquipmentId(0);
  };

  return (
    <List w="100%">
      {plants.map((plant) => (
        <ListItem
          key={plant.id}
          py={1}
          px={2}
          bgColor={plantId === plant.id ? "blue.300" : "gray.700"}
        >
          <HStack justify="space-between">
            <Text
              color="white"
              onClick={() => handleSelect(plant.id)}
              cursor="pointer"
            >
              {plant.name}
              <Box as="span">
                <ListViewLinkIcon path={`/dashboards/${plant?.name}`} />
              </Box>
            </Text>
            <HStack>
              {user && <PlantEditButton plant={plant} />}
              {user && <PlantDeleteButton plantId={plant.id} />}
            </HStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default PlantsList;
