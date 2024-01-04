import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Part } from "../../entities/parts";
import useModelStore from "../../store/model";
import PartDeleteButton from "./PartDeleteButton";
import PartEditButton from "./PartEditButton";

const PartsList = ({ parts }: { parts: Part[] }) => {
  const { equipmentId: partId } = useModelStore((s) => s.modelQuery);
  const setPartId = useModelStore((s) => s.setEquipmentId);

  return (
    <List w="100%">
      {parts?.map((part) => (
        <ListItem
          key={part.id}
          py={1}
          px={2}
          bgColor={partId === part.id ? "blue.300" : "gray.700"}
        >
          <HStack justify="space-between">
            <Text
              color="white"
              onClick={() => setPartId(part.id)}
              cursor="pointer"
            >
              {part.name}
            </Text>
            <HStack>
              <PartEditButton part={part} />
              <PartDeleteButton partId={part.id} />
            </HStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default PartsList;
