import {
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DashboardCard } from ".";
import EndTimePicker from "../EndTimePicker";
import StartTimePicker from "../StartTimePicker";

const DashboardTimeSelectInput = () => {
  return (
    <DashboardCard>
      <VStack gap={2} align="start" h="full">
        <HStack>
          <Text>From</Text>
          <StartTimePicker />
          <Text>To</Text>
          <EndTimePicker />
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
