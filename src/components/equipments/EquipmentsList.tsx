import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Equipment } from "../../entities/equipments";
import useModelStore from "../../store/model";
import EquipmentDeleteButton from "./EquipmentDeleteButton";
import EquipmentEditButton from "./EquipmentEditButton";

const EquipmentsList = ({ equipments }: { equipments: Equipment[] }) => {
  const { equipmentId } = useModelStore((s) => s.modelQuery);
  const setEquipmentId = useModelStore((s) => s.setEquipmentId);

  return (
    <List w="100%">
      {equipments?.map((equipment) => (
        <ListItem
          key={equipment.id}
          py={1}
          px={2}
          bgColor={equipmentId === equipment.id ? "blue.300" : "gray.700"}
        >
          <HStack justify="space-between">
            <Text
              color="white"
              onClick={() => setEquipmentId(equipment.id)}
              cursor="pointer"
            >
              {equipment.name}
            </Text>
            <HStack>
              <EquipmentEditButton equipment={equipment} />
              <EquipmentDeleteButton equipmentId={equipment.id} />
            </HStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default EquipmentsList;
