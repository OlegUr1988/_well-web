import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import useModelStore from "../../../store/model";
import useUserStore from "../../../store/user";
import SubassetDeleteButton from "./SubassetDeleteButton";
import SubassetEditButton from "./SubassetEditButton";

const SubassetsList = ({ assets }: { assets: Asset[] }) => {
  const { subassetId } = useModelStore((s) => s.modelQuery);
  const setSubassetId = useModelStore((s) => s.setSubassetId);
  const user = useUserStore((s) => s.user);

  return (
    <List w="100%">
      {assets?.map((asset) => (
        <ListItem
          key={asset.id}
          py={1}
          px={2}
          bgColor={subassetId === asset.id ? "blue.300" : "gray.700"}
        >
          <HStack justify="space-between">
            <Text
              color="white"
              onClick={() => setSubassetId(asset.id)}
              cursor="pointer"
            >
              {asset.name}
            </Text>
            <HStack>
              {user && <SubassetEditButton asset={asset} />}
              {user && <SubassetDeleteButton assetId={asset.id} />}
            </HStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default SubassetsList;
