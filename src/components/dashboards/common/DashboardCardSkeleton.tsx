import { Skeleton } from "@chakra-ui/react";
import DashboardCard from "./DashboardCard";

interface Props {
  h?: number;
}

const DashboardCardSkeleton = ({ h = 350 }: Props) => {
  return (
    <DashboardCard>
      <Skeleton h={h} borderRadius={10} />
    </DashboardCard>
  );
};

export default DashboardCardSkeleton;
