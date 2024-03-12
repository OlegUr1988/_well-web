import { Box, Heading } from "@chakra-ui/react";
import { useAttributes } from "../../../hooks/attributes";
import useModelStore from "../../../store/model";
import AttributeTypesList from "./AttributeTypesList";

const AttributesSection = () => {
  const { subassetId: equipmentId } = useModelStore((s) => s.modelQuery);
  const { data: attributes, isLoading, error } = useAttributes({ equipmentId });

  if (equipmentId === 0) return null;

  if (error) return null;

  if (isLoading) return <Heading>Loading</Heading>;

  return (
    <Box mx={5}>
      <Heading>Attributes</Heading>

      <AttributeTypesList attributes={attributes!} />
    </Box>
  );
};

export default AttributesSection;
