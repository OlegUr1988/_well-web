import ReactApexChart from "react-apexcharts";
import { Asset } from "../../../entities/assets";
import { useGetConsumptionsByUtility } from "../../../hooks/charts";
import { MessageComponent } from "../common";

const ConsumptionsDonutChart = ({ assets }: { assets: Asset[] }) => {
  const chart = useGetConsumptionsByUtility(assets);
  if (!chart)
    return (
      <MessageComponent height={330} message="The Data is not available" />
    );

  const { series, options } = chart;

  return (
    <ReactApexChart
      series={series}
      options={options}
      height={250}
      type="donut"
    />
  );
};

export default ConsumptionsDonutChart;
