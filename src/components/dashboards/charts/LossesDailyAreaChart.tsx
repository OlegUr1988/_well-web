import ReactApexChart from "react-apexcharts";
import { Asset } from "../../../entities/assets";
import { useCreateAreaChartOptions } from "../../../hooks/charts";
import { DashboardCardErrorMessage } from "../common";
import { ApexOptions } from "apexcharts";

interface Props {
  parentAsset: Asset;
  enableDataLabels?: boolean;
}

const LossesDailyAreaChart = ({ parentAsset, enableDataLabels }: Props) => {
  const assets = parentAsset?.children;

  const { series, options } = useCreateAreaChartOptions(assets!);

  const chartOptions: ApexOptions = {
    ...options,
    dataLabels: { ...options.dataLabels, enabled: enableDataLabels },
  };

  if (!series.length) return <DashboardCardErrorMessage />;

  return (
    <ReactApexChart
      options={chartOptions}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default LossesDailyAreaChart;
