import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import useCreateColumnChartOptions from "../../hooks/useCreateColumnChartOptions";

const AreaTotalLossesColumnChart = ({ assets }: { assets: Asset[] }) => {
  const chart = useCreateColumnChartOptions(assets);
  if (!chart) return null;

  const { series, options } = chart;

  return (
    <ReactApexChart series={series} options={options} type="bar" height={500} />
  );
};

export default AreaTotalLossesColumnChart;
