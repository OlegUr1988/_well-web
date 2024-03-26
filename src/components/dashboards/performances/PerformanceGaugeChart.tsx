import { Box, Text, VStack } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import usePerformanceData from "../../../hooks/usePerformanceData";
import {
  calculateTotalDuty,
  calculateTotalUsefulWork,
  calculateUsefulWorkRatio,
} from "../../../utils/performances";
import PerformanceGauge from "./PerformanceGauge";
import PerformanceGaugeMetricSummary from "./PerformanceGaugeMetricSummary";

interface Props {
  asset: Asset;
  count?: number;
}

const PerformanceGaugeChart = ({ asset, count = 1 }: Props) => {
  const allAttributes = asset.attributes;

  const dutyAttribute = allAttributes.find(
    (attr) => attr.name.toLowerCase() === "duty"
  );
  const dutyAssignments = dutyAttribute ? dutyAttribute?.assignments : [];

  const usefulworkAttribute = allAttributes.find(
    (attr) => attr.name.toLowerCase() === "useful work"
  );
  const usefulWorkAssignments = usefulworkAttribute
    ? usefulworkAttribute.assignments
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
      <Box w={300} overflowX="auto">
        <Text fontSize="lg" textAlign="left" fontWeight={600}>
          {asset.name}
        </Text>
        <Box position="relative" top={-10}>
          <PerformanceGauge
            usefulWorkRatio={usefulWorkRatio}
            height={count > 1 ? 300 : 380}
          />
          <PerformanceGaugeMetricSummary
            totalDuty={totalDuty}
            totalUsefulWork={totalUsefulWork}
            usefulWorkRatio={usefulWorkRatio}
            count={count}
          />
        </Box>
      </Box>
    </VStack>
  );
};

export default PerformanceGaugeChart;
