import { Box, HStack, Text } from "@chakra-ui/react";
import numeral from "numeral";

interface Props {
  totalDuty: string;
  totalUsefulWork: string;
  usefulWorkRatio: number;
  count?: number;
}

const AssetPerformanceGaugeMetricSummary = ({
  totalDuty,
  totalUsefulWork,
  usefulWorkRatio,
  count = 1,
}: Props) => {
  return (
    <Box>
      <HStack justify="space-between">
        <Text
          position="relative"
          left={count > 1 ? 8 : 2}
          w={10}
          textAlign="center"
        >
          0.0
        </Text>
        <Text fontSize="xl" fontWeight="bold" position="relative" bottom={5}>
          {numeral(totalUsefulWork).format("0.0a").toUpperCase()} kWh
        </Text>
        <Text
          position="relative"
          right={count > 1 ? 8 : 1}
          w={12}
          textAlign="center"
        >
          {numeral(totalDuty).format("0.0a").toUpperCase()}
        </Text>
      </HStack>
      <Text textAlign="center">
        {usefulWorkRatio.toFixed(2)}% Usefull Work Ratio [%]
      </Text>
    </Box>
  );
};

export default AssetPerformanceGaugeMetricSummary;
