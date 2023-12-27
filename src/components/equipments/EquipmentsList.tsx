import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Equipment } from "../../entities/equipments";
import EquipmentDeleteButton from "./EquipmentDeleteButton";
import EquipmentEditButton from "./EquipmentEditButton";

const EquipmentsList = ({ equipments }: { equipments: Equipment[] }) => {
  return (
    <>
      {equipments?.map((equipment) => (
        <List key={equipment.id} w="100%">
          <ListItem my={1}>
            <HStack justify="space-between">
              <Text color="white">{equipment.name}</Text>
              <HStack>
                <EquipmentEditButton equipment={equipment} />
                <EquipmentDeleteButton equipmentId={equipment.id} />
              </HStack>
            </HStack>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default EquipmentsList;
