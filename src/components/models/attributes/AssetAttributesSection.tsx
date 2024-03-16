import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { useAsset } from "../../../hooks/assets";
import { useAttributes } from "../../../hooks/attributes";
import useModelStore from "../../../store/model";
import LoadingSpinner from "../LoadingSpinner";
import AttributeCard from "./AttributeCard";

const AssetAttributesSection = () => {
  const { assetId } = useModelStore((s) => s.modelQuery);
  const { data: attributes, isLoading, error } = useAttributes({ assetId });
  const { data: asset } = useAsset(assetId);

  if (assetId === 0 || !asset) return null;

  if (error) return null;

  if (isLoading) return <LoadingSpinner />;

  return (
    <Box m={5}>
      <Heading mb={3}>Asset Attributes</Heading>

      <HStack mb={3}>
        <Text fontSize={22}>Utility type: </Text>
        <Text fontSize={22} fontWeight="bold">
          {asset!.utilityType.name}
        </Text>
      </HStack>

      {attributes?.length! > 0 ? (
        <AttributeCard attribute={attributes![0]} />
      ) : (
        <Text>No attributes for this utility type</Text>
      )}
    </Box>
  );
};

export default AssetAttributesSection;
