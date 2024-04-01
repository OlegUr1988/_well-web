import { Heading } from "@chakra-ui/react";
import DashboardCard from "./DashboardCard";
import { Asset } from "../../entities/assets";

const PlantTotalKPITrendCard = ({ plant }: { plant: Asset }) => {
  return (
    <DashboardCard>
      <Heading fontSize="xl">Production</Heading>
    </DashboardCard>
  );
};

export default PlantTotalKPITrendCard;
