import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import useGetKPIchartOptions from "../../hooks/useGetKPIchartOptions";
import { Trend } from "../../store/dashboard";
import DashboardCard from "./DashboardCard";
import DashboardCardSkeleton from "./DashboardCardSkeleton";
import TotalKPICardHeader from "./TotalKPICardHeader";

interface Props {
  asset: Asset;
  trendType: Trend;
}

const TotalKPITrendCard = ({ asset, trendType }: Props) => {
  const { isLoading, series, options } = useGetKPIchartOptions(
    asset,
    trendType
  );

  const getHeader = () => {
    switch (trendType) {
      case "production":
        return "Production";

      case "energy consumption":
        return "Energy consumption";

      case "specific energy consumption":
        return "Specific energy consumption";
    }

    return "";
  };

  if (isLoading) return <DashboardCardSkeleton h={400} />;

  return (
    <DashboardCard p={5}>
      <TotalKPICardHeader label={getHeader()} />
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

export default TotalKPITrendCard;
