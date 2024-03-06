import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { DashboardCard } from ".";
import EndTimePicker from "./EndTimePicker";
import StartTimePicker from "./StartTimePicker";
import TimeRangeSlider from "./TimeRangeSlider";

const DashboardTimeSelectInput = () => {
  return (
    <DashboardCard>
      <VStack gap={2} align="start" h="full">
        <Flex direction={{ base: "column", lg: "row" }} gap={2}>
          <HStack>
            <Text>From</Text>
            <StartTimePicker />
          </HStack>
          <HStack>
            <Text>To</Text>
            <EndTimePicker />
          </HStack>
        </Flex>
        <Box w="100%" px={2}>
          <TimeRangeSlider />
        </Box>
      </VStack>
    </DashboardCard>
  );
};

export default DashboardTimeSelectInput;
