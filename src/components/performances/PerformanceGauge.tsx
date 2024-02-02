import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import numeral from "numeral";
import ReactApexChart from "react-apexcharts";
import semiGaugeOptions from "../../constants/semiGaugeOptions";
import { Equipment } from "../../entities/equipments";
import useGetRecords from "../../hooks/useGetRecords";
import { getRecordsByUnits, getSumOfRecords } from "../../utils/records";

const PerformanceGauge = ({ equipment }: { equipment: Equipment }) => {
  const allAttributes = equipment.attribute;

  // Get duty
  const dutyAttribute = allAttributes.find(
    (attr) => attr.name.toLowerCase() === "duty"
  );
  const dutyAssignments = dutyAttribute ? dutyAttribute?.assignment : [];
  const {
    records: dutyRecords,
    isLoading: isDutyLoading,
    error: isDutyError,
  } = useGetRecords(dutyAssignments);

  // Get useful work
  const usefulworkAttribute = allAttributes.find(
    (attr) => attr.name.toLowerCase() === "useful work"
  );
  const usefulWorkAssignments = usefulworkAttribute
    ? usefulworkAttribute.assignment
    : [];
  const {
    records: usefulWorkRecords,
    isLoading: isUsefulWorkLoading,
    error: isUsefulWorkError,
  } = useGetRecords(usefulWorkAssignments);

  // Get useful work ratio
  if (isUsefulWorkLoading || isDutyLoading) return null;

  if (isUsefulWorkError || isDutyError) return null;

  const totalDuty = () =>
    getSumOfRecords(getRecordsByUnits(dutyRecords!, "kWh"));

  const totalUsefullWork = () =>
    getSumOfRecords(getRecordsByUnits(usefulWorkRecords!, "kWh"));

  const usefulWorRatio = () => {
    const result =
      (parseFloat(totalUsefullWork()) / parseFloat(totalDuty())) * 100;
    return isNaN(result) ? 0.0 : result;
  };

  return (
    <VStack>
      <Box w={250} overflowX="auto">
        <Text fontSize="lg" textAlign="left">
          {equipment.name}
        </Text>
        <ReactApexChart
          series={[usefulWorRatio()]}
          options={semiGaugeOptions}
          type="radialBar"
          height={300}
        />
        <Box>
          <HStack justify="space-between">
            <Text position="relative" left={2} w={10} textAlign="center">
              0.0
            </Text>
            <Text
              fontSize="xl"
              fontWeight="bold"
              position="relative"
              bottom={5}
            >
              {numeral(totalUsefullWork()).format("0.0a").toUpperCase()} kWh
            </Text>
            <Text position="relative" right={1} w={12} textAlign="center">
              {numeral(totalDuty()).format("0.0a").toUpperCase()}
            </Text>
          </HStack>
          <Text textAlign="center">
            {usefulWorRatio().toFixed(2)}% Usefull Work Ratio [%]
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default PerformanceGauge;
