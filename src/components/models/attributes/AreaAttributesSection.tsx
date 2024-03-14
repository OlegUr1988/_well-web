import { Box, Heading } from "@chakra-ui/react";
import { useAttributes } from "../../../hooks/attributes";
import useModelStore from "../../../store/model";
import AttributeCard from "./AttributeCard";
import { useTarget } from "../../../hooks/targets";

const AreaAttributesSection = () => {
  const { areaId } = useModelStore((s) => s.modelQuery);
  const {
    data: attributes,
    isLoading,
    error,
  } = useAttributes({ assetId: areaId });
  const { data: targets } = useTarget({ assetId: areaId });

  if (areaId === 0) return null;

  if (error) return null;

  if (isLoading) return <Heading>Loading</Heading>;

  const getProduction = () =>
    attributes!.find((attr) => attr.name.toLowerCase() === "production");

  const getTotalEnergyConsupmtion = () =>
    attributes!.find(
      (attr) => attr.name.toLowerCase() === "total energy consumption"
    );

  console.log(targets);

  return (
    <Box m={5}>
      <Heading>Attributes</Heading>

      <AttributeCard attribute={getProduction()!} />
      <AttributeCard attribute={getTotalEnergyConsupmtion()!} />
    </Box>
  );
};

export default AreaAttributesSection;
