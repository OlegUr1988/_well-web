import {
  HStack,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DashboardCard } from ".";

const DashboardTimeSelectInput = () => {
  return (
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
  );
};

export default DashboardTimeSelectInput;
