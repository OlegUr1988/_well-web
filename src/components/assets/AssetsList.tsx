import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import AssetDeleteButton from "./AssetDeleteButton";
import AssetModifyButton from "./AssetModifyButton";

const AssetsList = ({ assets }: { assets: Asset[] }) => {
  return (
    <>
      {assets?.map((asset) => (
        <List key={asset.id} w="100%">
          <ListItem my={1}>
            <HStack justify="space-between">
              <Text color="white">{asset.name}</Text>
              <HStack>
                <AssetModifyButton asset={asset} />
                <AssetDeleteButton assetId={asset.id} />
              </HStack>
            </HStack>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default AssetsList;
