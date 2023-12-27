import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Part } from "../../entities/parts";
import useModelStore from "../../store/model";

const PartsList = ({ parts }: { parts: Part[] }) => {
  const { partId } = useModelStore((s) => s.modelQuery);
  const setPartId = useModelStore((s) => s.setPartId);

  return (
    <List w="100%">
      {parts?.map((parts) => (
        <ListItem
          key={parts.id}
          py={1}
          px={2}
          bgColor={partId === parts.id ? "gray.400" : "gray.700"}
        >
          <HStack justify="space-between">
            <Text
              color="white"
              onClick={() => setPartId(parts.id)}
              cursor="pointer"
            >
              {parts.name}
            </Text>
            <HStack>
              {/* <EquipmentEditButton equipment={equipment} /> */}
              {/* <EquipmentDeleteButton equipmentId={equipment.id} /> */}
            </HStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default PartsList;
