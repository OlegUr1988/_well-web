import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../../entities/assets";
import useGetAreaC02EmissionKPIchartOptions from "../../../hooks/useGetAreaC02EmissionKPIchartOptions";
import { DashboardCard } from "../common/";
import DashboardCardErrorMessage from "../DashboardCardErrorMessage";
import DashboardCardSkeleton from "../DashboardCardSkeleton";
import TotalKPICardHeader from "../TotalKPICardHeader";

const AreaTotalCO2EmissionKPITrendCard = ({ plant }: { plant: Asset }) => {
  const { isLoading, series, options } =
    useGetAreaC02EmissionKPIchartOptions(plant);

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

export default AreaTotalCO2EmissionKPITrendCard;
