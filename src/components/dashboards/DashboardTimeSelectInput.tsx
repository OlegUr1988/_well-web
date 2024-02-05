import { HStack, Text, VStack } from "@chakra-ui/react";
import { DashboardCard } from ".";
import EndTimePicker from "../EndTimePicker";
import StartTimePicker from "../StartTimePicker";
import TimeRangeSlider from "../TimeRangeSlider";

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
        <TimeRangeSlider />
      </VStack>
    </DashboardCard>
  );
};

export default DashboardTimeSelectInput;
