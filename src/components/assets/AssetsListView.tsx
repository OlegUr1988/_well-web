import { Box, Heading, VStack } from "@chakra-ui/react";
import { AssetsList } from ".";
import { useAssets } from "../../hooks/assets";
import ListViewSpinner from "../ListViewSpinner";
import AssetCreateButton from "./AssetCreateButton";

const AssetsListView = () => {
  const { data: assets, isLoading, error } = useAssets({});

  if (isLoading) return <ListViewSpinner />;

  if (error) return null;

  return (
    <VStack
      h="100%"
      width={250}
      bgColor="gray.700"
      alignItems="start"
      borderRight="1px solid gray"
    >
      <Heading color="white" size="lg" px={2} my={3}>
        Assets
      </Heading>

      <AssetsList assets={assets!} />

      <Box p={2} w="100%">
        <AssetCreateButton />
      </Box>
    </VStack>
  );
};

export default AssetsListView;
