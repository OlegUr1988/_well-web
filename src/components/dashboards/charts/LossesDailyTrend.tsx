import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { TrendType } from "../../../entities/trendType";
import { Asset } from "../../../entities/assets";
import useCreateTrendChartOptions from "../../../hooks/charts/useCreateTrendChartOptions";
import { DashboardCardErrorMessage } from "../common";

interface Props {
  parentAsset: Asset;
  trendType: TrendType;
  enableDataLabels?: boolean;
}

const LossesDailyTrend = ({
  parentAsset,
  trendType,
  enableDataLabels = true,
}: Props) => {
  const assets = parentAsset?.children;

  const { series, options } = useCreateTrendChartOptions(assets, trendType)!;

  const chartOptions: ApexOptions = {
    ...options,
    dataLabels: { ...options.dataLabels, enabled: enableDataLabels },
  };

  if (!series.length) return <DashboardCardErrorMessage />;

  return (
    <ReactApexChart
      options={chartOptions}
      series={series}
      type={trendType}
      height={350}
    />
  );
};

export default LossesDailyTrend;
