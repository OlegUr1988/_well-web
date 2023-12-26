import { Heading, VStack } from "@chakra-ui/react";
import { AssetsList } from ".";
import { useAssets } from "../../hooks/assets";
import ListViewSpinner from "../ListViewSpinner";
import AssetCreateButton from "./AssetCreateButton";

const AssetsListView = () => {
  const { data: assets, isLoading, error } = useAssets({});

  if (isLoading) return <ListViewSpinner />;

  if (error) return null;

  return (
    <VStack h="100%" width={250} bgColor="gray.700" alignItems="start" p={2}>
      <Heading color="white" size="lg" mb={3}>
        Assets
      </Heading>

      <AssetsList assets={assets!} />

      <AssetCreateButton />
    </VStack>
  );
};

export default AssetsListView;
