import { Box, Heading } from "@chakra-ui/react";
import useModelStore from "../../../store/model";
import { useAttributes } from "../../../hooks/attributes";

const AssetAttributesSection = () => {
  const { assetId } = useModelStore((s) => s.modelQuery);
  const { data: attributes, isLoading, error } = useAttributes({ assetId });

  console.log(attributes);

  if (assetId === 0) return null;

  if (error) return null;

  if (isLoading) return <Heading>Loading</Heading>;

  return (
    <Box m={5}>
      <Heading>Attributes</Heading>
    </Box>
  );
};

export default AssetAttributesSection;
