import { Heading } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import useGetKPIchartOptions from "../../hooks/useGetKPIchartOptions";
import { Trend } from "../../store/dashboard";
import DashboardCard from "./DashboardCard";
import DashboardCardSkeleton from "./DashboardCardSkeleton";

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
  };

  if (isLoading) return <DashboardCardSkeleton h={400} />;

  return (
    <DashboardCard p={5}>
      <Heading fontSize="xl" mb={3}>
        {getHeader()}
      </Heading>
      <ReactApexChart
        options={options}
        series={series!}
        type="line"
        height={400}
      />
    </DashboardCard>
  );
};

export default TotalKPITrendCard;
