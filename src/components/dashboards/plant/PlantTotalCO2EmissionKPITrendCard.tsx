import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../../entities/assets";
import useGetPlantC02EmissionKPIchartOptions from "../../../hooks/useGetPlantC02EmissionKPIchartOptions";
import { DashboardCard } from "../common/";
import DashboardCardErrorMessage from "../DashboardCardErrorMessage";
import DashboardCardSkeleton from "../DashboardCardSkeleton";
import TotalKPICardHeader from "../TotalKPICardHeader";

const PlantTotalCO2EmissionKPITrendCard = ({ plant }: { plant: Asset }) => {
  const { isLoading, series, options } =
    useGetPlantC02EmissionKPIchartOptions(plant);

  if (isLoading) return <DashboardCardSkeleton h={400} />;

  if (!series.length) return <DashboardCardErrorMessage />;

  return (
    <DashboardCard p={5}>
      <TotalKPICardHeader label="CO2 emission" />
      <Box className="z-level-one">
        <ReactApexChart
          options={options}
          series={series!}
          type="line"
          height={400}
        />
      </Box>
    </DashboardCard>
  );
};

export default PlantTotalCO2EmissionKPITrendCard;
