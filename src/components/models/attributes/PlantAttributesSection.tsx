import { Box, Divider, Heading } from "@chakra-ui/react";
import { useAttributes } from "../../../hooks/attributes";
import { useTarget } from "../../../hooks/targets";
import useModelStore from "../../../store/model";
import LoadingSpinner from "../../common/LoadingSpinner";
import AttributeCard from "./AttributeCard";
import TargetsForm from "./TargetsForm";

const PlantAttributesSection = () => {
  const { plantId } = useModelStore((s) => s.modelQuery);
  const {
    data: attributes,
    isLoading: attributesLoading,
    error: attributesError,
  } = useAttributes({ assetId: plantId });
  const {
    data: targets,
    isLoading: targetsLoading,
    error: targetsError,
  } = useTarget({
    assetId: plantId,
  });

  if (plantId === 0) return null;

  if (attributesError || targetsError) return null;

  if (attributesLoading || targetsLoading) return <LoadingSpinner />;

  const getProduction = () =>
    attributes!.find((attr) => attr.name.toLowerCase() === "production");

  const getTotalEnergyConsupmtion = () =>
    attributes!.find(
      (attr) => attr.name.toLowerCase() === "total energy consumption"
    );

  return (
    <Box m={5}>
      <Heading mb={3}>Plant Attributes</Heading>
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

export default PlantAttributesSection;
