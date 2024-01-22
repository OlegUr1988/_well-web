import { Skeleton } from "@chakra-ui/react";
import DashboardCard from "./DashboardCard";

const DashboardCardSkeleton = () => {
  return (
    <DashboardCard>
      <Skeleton h={350} borderRadius={10} />
    </DashboardCard>
  );
};

export default DashboardCardSkeleton;
