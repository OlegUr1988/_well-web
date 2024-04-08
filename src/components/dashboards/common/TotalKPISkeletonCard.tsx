import { HStack, Skeleton, VStack } from "@chakra-ui/react";
import DashboardCard from "./DashboardCard";

const TotalKPISkeletonCard = () => {
  return (
    <DashboardCard h="100%">
      <VStack justify="space-between" h="100%" align="flex-start">
        <Skeleton h={6} mb={1} w="70%" borderRadius={10} />
        <HStack mb={1} align="center" w="100%">
          <Skeleton h={8} w="20%" borderRadius={10} />
          <Skeleton h={6} w="40%" borderRadius={10} />
        </HStack>
        <HStack mb={1} align="center" w="100%">
          <Skeleton h={6} w={4} borderRadius={10} />
          <Skeleton h={6} w="60%" borderRadius={10} />
        </HStack>
      </VStack>
    </DashboardCard>
  );
};

export default TotalKPISkeletonCard;
