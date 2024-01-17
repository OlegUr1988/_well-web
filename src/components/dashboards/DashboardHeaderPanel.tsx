import {
  Center,
  HStack,
  Heading,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Area } from "../../entities/areas";
import { Asset } from "../../entities/assets";
import DashboardCard from "./DashboardCard";

interface Props {
  area: Area;
  asset: Asset;
}

const DashboardHeaderPanel = ({ area, asset }: Props) => {
  if (!area?.asset.find((ass) => ass.id === asset?.id))
    return (
      <Heading>{`The asset: ${asset?.name} is not exists in area: ${area?.name}`}</Heading>
    );
  return (
    <SimpleGrid
      templateColumns={"225px repeat(3, 1fr)"}
      gridTemplateRows={"1fr"}
      gap={5}
    >
      <DashboardCard>
        <Center fontSize={36} fontWeight={700} color="red" textAlign="center">
          Honeywell
        </Center>
      </DashboardCard>

      <DashboardCard>
        <VStack gap={1} align="start" rowGap={1}>
          <Text fontSize={16}>Area:</Text>
          <Tag>{area?.name}</Tag>
        </VStack>
      </DashboardCard>

      <DashboardCard>
        <VStack gap={0} align="start" rowGap={1}>
          <Text fontSize={16}>Asset:</Text>
          <Tag>{asset?.name}</Tag>
        </VStack>
      </DashboardCard>

      <DashboardCard>
        <VStack gap={1} align="start" h="full">
          <HStack>
            <Text>From</Text>
            <Input type="date" fontSize={12} />
            <Text>To</Text>
            <Input type="date" fontSize={12} />
          </HStack>
          <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </VStack>
      </DashboardCard>
    </SimpleGrid>
  );
};

export default DashboardHeaderPanel;
