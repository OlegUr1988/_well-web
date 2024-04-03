import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import useCreateDonutChart from "../../hooks/useCreateDonutChart";
import MessageComponent from "./MessageComponent";

const LossesByAssetsPieChart = ({ assets }: { assets: Asset[] }) => {
  const chart = useCreateDonutChart(assets);
  if (!chart)
    return (
      <MessageComponent height={200} message="The Data is not available" />
    );

  const { series, options } = chart;

  return (
    <ReactApexChart
      series={series}
      options={options}
      height={350}
      type="donut"
    />
  );
};

export default LossesByAssetsPieChart;
