import ReactApexChart from "react-apexcharts";
import { Asset } from "../../../entities/assets";
import { useCreateAreaChartOptions } from "../../../hooks/charts";
import { DashboardCardErrorMessage } from "../common";

const LossesDailyAreaChart = ({ parentAsset }: { parentAsset: Asset }) => {
  const assets = parentAsset?.children;

  const { series, options } = useCreateAreaChartOptions(assets!);

  if (!series.length) return <DashboardCardErrorMessage />;

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default LossesDailyAreaChart;
