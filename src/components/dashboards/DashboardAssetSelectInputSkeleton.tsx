import { Skeleton, VStack } from "@chakra-ui/react";
import { DashboardCard } from ".";

const DashboardAssetSelectInputSkeleton = () => {
  return (
    <DashboardCard>
      <VStack align="left">
        <Skeleton h={5} w={120} rounded={5} />
        <Skeleton h={8} rounded={5} />
      </VStack>
    </DashboardCard>
  );
};

export default DashboardAssetSelectInputSkeleton;
