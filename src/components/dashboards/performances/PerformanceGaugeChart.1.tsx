import { Box, Text, VStack } from "@chakra-ui/react";
import { Equipment } from "../../../entities/equipments";
import usePerformanceData from "../../../hooks/usePerformanceData";
import {
  calculateTotalDuty,
  calculateTotalUsefulWork,
  calculateUsefulWorkRatio,
} from "../../../utils/performances";
import PerformanceGauge from "./PerformanceGauge";
import PerformanceGaugeMetricSummary from "./PerformanceGaugeMetricSummary";

export const PerformanceGaugeChart = ({
  equipment,
}: {
  equipment: Equipment;
}) => {
  const allAttributes = equipment.attribute;

  // Get duty
  const dutyAttribute = allAttributes.find(
    (attr) => attr.name.toLowerCase() === "duty"
  );
  const dutyAssignments = dutyAttribute ? dutyAttribute?.assignment : [];

  // Get useful work
  const usefulworkAttribute = allAttributes.find(
    (attr) => attr.name.toLowerCase() === "useful work"
  );
  const usefulWorkAssignments = usefulworkAttribute
    ? usefulworkAttribute.assignment
    : [];

  const {
    records: dutyRecords,
    isLoading: isDutyLoading,
    error: isDutyError,
  } = usePerformanceData(dutyAssignments);
  const {
    records: usefulWorkRecords,
    isLoading: isUsefulWorkLoading,
    error: isUsefulWorkError,
  } = usePerformanceData(usefulWorkAssignments);

  if (isUsefulWorkLoading || isDutyLoading) return null;

  if (isUsefulWorkError || isDutyError) return null;

  const totalDuty = calculateTotalDuty(dutyRecords!);
  const totalUsefulWork = calculateTotalUsefulWork(usefulWorkRecords!);
  const usefulWorkRatio = calculateUsefulWorkRatio(totalUsefulWork, totalDuty);

  return (
    <VStack>
      <Box w={250} overflowX="auto">
        <Text fontSize="lg" textAlign="left">
          {equipment.name}
        </Text>
        <PerformanceGauge usefulWorkRatio={usefulWorkRatio} />
        <PerformanceGaugeMetricSummary
          totalDuty={totalDuty}
          totalUsefulWork={totalUsefulWork}
          usefulWorkRatio={usefulWorkRatio}
        />
      </Box>
    </VStack>
  );
};
