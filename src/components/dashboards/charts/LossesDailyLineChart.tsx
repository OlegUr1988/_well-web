import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../../entities/assets";
import { useCreateLineChartOptions } from "../../../hooks/charts";
import { DashboardCardErrorMessage } from "../common";

interface Props {
  parentAsset: Asset;
  enableDataLabels?: boolean;
}

const LossesDailyLineChart = ({ parentAsset, enableDataLabels }: Props) => {
  const assets = parentAsset?.children;

  const { series, options } = useCreateLineChartOptions(assets!);

  if (!series.length) return <DashboardCardErrorMessage />;

  const chartOptions: ApexOptions = {
    ...options,
    dataLabels: { ...options.dataLabels, enabled: enableDataLabels },
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default LossesDailyLineChart;
