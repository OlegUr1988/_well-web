import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Equipment } from "../../entities/equipments";
import AssetDeleteButton from "../assets/AssetDeleteButton";
import AssetModifyButton from "../assets/AssetModifyButton";

const EquipmentsList = ({ equipments }: { equipments: Equipment[] }) => {
  return (
    <>
      {equipments?.map((equipment) => (
        <List key={equipment.id} w="100%">
          <ListItem my={1}>
            <HStack justify="space-between">
              <Text color="white">{equipment.name}</Text>
              <HStack>
                <AssetModifyButton asset={equipment} />
                <AssetDeleteButton assetId={equipment.id} />
              </HStack>
            </HStack>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default EquipmentsList;
