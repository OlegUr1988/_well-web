import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import semiGaugeOptions from "../../constants/semiGaugeOptions";
import { Equipment } from "../../entities/equipments";

const PerformanceGauge = ({ equipment }: { equipment: Equipment }) => {
  return (
    <VStack>
      <Box w={250} overflowX="auto">
        <Text fontSize="lg" textAlign="left">
          {equipment.name}
        </Text>
        <ReactApexChart
          series={[76]}
          options={semiGaugeOptions}
          type="radialBar"
          height={300}
        />
        <Box position="relative" top={-5}>
          <HStack justify="space-between">
            <Text pl={6}>0</Text>
            <Text pr={5}>100</Text>
          </HStack>
          <Text textAlign="center">Total duty: 76%</Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default PerformanceGauge;
