import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import useModelStore from "../../store/model";
import AssetDeleteButton from "./AssetDeleteButton";
import AssetEditButton from "./AssetEditButton";

const AssetsList = ({ assets }: { assets: Asset[] }) => {
  const { assetId } = useModelStore((s) => s.modelQuery);
  const setAssetId = useModelStore((s) => s.setAssetId);

  return (
    <List w="100%">
      {assets?.map((asset) => (
        <ListItem
          key={asset.id}
          py={1}
          px={2}
          bgColor={assetId === asset.id ? "gray.400" : "gray.700"}
        >
          <HStack justify="space-between">
            <Text
              color="white"
              onClick={() => setAssetId(asset.id)}
              cursor="pointer"
            >
              {asset.name}
            </Text>
            <HStack>
              <AssetEditButton asset={asset} />
              <AssetDeleteButton assetId={asset.id} />
            </HStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default AssetsList;
