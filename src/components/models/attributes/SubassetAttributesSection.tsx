import { Box, Heading } from "@chakra-ui/react";
import { useAttributes } from "../../../hooks/attributes";
import useModelStore from "../../../store/model";
import { LoadingSpinner } from "../../common/";
import SubassetAttributeTypesList from "./SubassetAttributeTypesList";

const SubassetAttributesSection = () => {
  const { subassetId } = useModelStore((s) => s.modelQuery);
  const {
    data: attributes,
    isLoading,
    error,
  } = useAttributes({ assetId: subassetId });

  if (subassetId === 0) return null;

  if (error) return null;

  if (isLoading) return <LoadingSpinner />;

  return (
    <Box m={5}>
      <Heading>Subasset Attributes</Heading>

      <SubassetAttributeTypesList attributes={attributes!} />
    </Box>
  );
};

export default SubassetAttributesSection;
