import { Box, Divider, Heading } from "@chakra-ui/react";
import { useAttributes } from "../../../hooks/attributes";
import { useTarget } from "../../../hooks/targets";
import useModelStore from "../../../store/model";
import AttributeCard from "./AttributeCard";
import TargetsForm from "./TargetsForm";

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

  return (
    <Box m={5}>
      <Heading mb={3}>Attributes</Heading>
      <Box mb={3}>
        <AttributeCard attribute={getProduction()!} />
      </Box>
      <Box mb={5}>
        <AttributeCard attribute={getTotalEnergyConsupmtion()!} />
      </Box>

      <Divider mb={3} />
      <Heading mb={3}>Targets</Heading>
      <TargetsForm targets={targets!} />
    </Box>
  );
};

export default AreaAttributesSection;
