import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAreaByName } from "../hooks/areas";
import { useAssetByName } from "../hooks/assets";

interface Props {
  areaName: string;
  assetName: string;
}

const DashboardHeaderPanel = ({ areaName, assetName }: Props) => {
  const {
    data: area,
    isLoading: isAreaLoading,
    error: areaError,
  } = useAreaByName({ name: areaName });
  const {
    data: asset,
    isLoading: isAssetLoading,
    error: assetError,
  } = useAssetByName({ name: assetName });

  if (isAreaLoading || isAssetLoading) return "Loading";

  if (areaError || assetError) return null;

  if (!area?.asset.find((ass) => ass.id === asset?.id))
    return (
      <Heading>{`The asset: ${asset?.name} is not exists in area: ${area?.name}`}</Heading>
    );
  return (
    <Grid
      templateColumns={"225px repeat(3, 1fr)"}
      gridTemplateRows={"1fr"}
      gap={5}
    >
      <GridItem
        p={4}
        boxShadow="lg"
        rounded="md"
        border="1px solid #ddd"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="red" fontWeight={800}>
          Honeywell
        </Heading>
      </GridItem>

      <GridItem p={3} boxShadow="lg" rounded="md" border="1px solid #ddd">
        <VStack gap={1} align="start" rowGap={1}>
          <Text fontSize={16}>Area:</Text>
          <Tag>{area?.name}</Tag>
        </VStack>
      </GridItem>

      <GridItem p={3} boxShadow="lg" rounded="md" border="1px solid #ddd">
        <VStack gap={0} align="start" rowGap={1}>
          <Text fontSize={16}>Asset:</Text>
          <Tag>{asset?.name}</Tag>
        </VStack>
      </GridItem>

      <GridItem p={3} boxShadow="lg" rounded="md" border="1px solid #ddd">
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
      </GridItem>
    </Grid>
  );
};

export default DashboardHeaderPanel;
