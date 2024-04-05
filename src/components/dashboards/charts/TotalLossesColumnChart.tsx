import ReactApexChart from "react-apexcharts";
import { Asset } from "../../../entities/assets";
import { useCreateColumnChartOptions } from "../../../hooks/charts/";
import { MessageComponent } from "../common";

const TotalLossesColumnChart = ({ assets }: { assets: Asset[] }) => {
  const chart = useCreateColumnChartOptions(assets);
  if (!chart)
    return (
      <MessageComponent height={330} message="The Data is not available" />
    );

  const { series, options } = chart;

  return (
    <ReactApexChart series={series} options={options} type="bar" height={400} />
  );
};

export default TotalLossesColumnChart;
