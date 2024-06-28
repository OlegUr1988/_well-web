import ReactApexChart from "react-apexcharts";
import { Asset } from "../../../entities/assets";
import { useCreateLineChartOptions } from "../../../hooks/charts";
import { DashboardCardErrorMessage } from "../common";

const LossesDailyLineChart = ({ parentAsset }: { parentAsset: Asset }) => {
  const assets = parentAsset?.children;

  const { series, options } = useCreateLineChartOptions(assets!);

  if (!series.length) return <DashboardCardErrorMessage />;

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default LossesDailyLineChart;
