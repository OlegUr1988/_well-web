import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Area } from "../../entities/areas";
import useUserStore from "../../store/auth";
import useModelStore from "../../store/model";
import AreaDeleteButton from "./AreaDeleteButton";
import AreaEditButton from "./AreaEditButton";

const AreasList = ({ areas }: { areas: Area[] }) => {
  const { areaId } = useModelStore((s) => s.modelQuery);
  const setAreaId = useModelStore((s) => s.setAreaId);
  const setAssetId = useModelStore((s) => s.setAssetId);
  const setEquipmentId = useModelStore((s) => s.setEquipmentId);
  const user = useUserStore((s) => s.user);

  const handleSelect = (id: number) => {
    setAreaId(id);
    setAssetId(0);
    setEquipmentId(0);
  };

  return (
    <List w="100%">
      {areas?.map((area) => (
        <ListItem
          key={area.id}
          py={1}
          px={2}
          bgColor={areaId === area.id ? "blue.300" : "gray.700"}
        >
          <HStack justify="space-between">
            <Text
              color="white"
              onClick={() => handleSelect(area.id)}
              cursor="pointer"
            >
              {area.name}
            </Text>
            <HStack>
              {user && <AreaEditButton area={area} />}
              {user && <AreaDeleteButton areaId={area.id} />}
            </HStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default AreasList;
