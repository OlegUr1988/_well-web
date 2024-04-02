import { Heading } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import useGetPlantC02EmissionKPIchartOptions from "../../hooks/useGetPlantC02EmissionKPIchartOptions";
import DashboardCard from "./DashboardCard";
import DashboardCardSkeleton from "./DashboardCardSkeleton";

const PlantTotalCO2EmissionKPITrendCard = ({ plant }: { plant: Asset }) => {
  const { isLoading, series, options } =
    useGetPlantC02EmissionKPIchartOptions(plant);

  if (isLoading) return <DashboardCardSkeleton h={400} />;

  return (
    <DashboardCard>
      <Heading fontSize="xl">Production</Heading>
      <ReactApexChart
        options={options}
        series={series!}
        type="line"
        height={400}
      />
    </DashboardCard>
  );
};

export default PlantTotalCO2EmissionKPITrendCard;
