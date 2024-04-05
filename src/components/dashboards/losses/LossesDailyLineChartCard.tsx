import ReactApexChart from "react-apexcharts";
import { DashboardCardErrorMessage, DashboardCardSkeleton } from "..";
import { Asset } from "../../../entities/assets";
import { useAsset } from "../../../hooks/assets";
import useCreateLineChartOptions from "../../../hooks/useCreateLineChartOptions";
import { DashboardCard } from "../common";

const LossesDailyLineChartCard = ({ asset }: { asset: Asset }) => {
  const { data: parentAsset, isLoading, error } = useAsset(asset.id);

  const assets = parentAsset?.children;

  const { series, options } = useCreateLineChartOptions(assets!);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error || !series.length) return <DashboardCardErrorMessage />;

  return (
    <DashboardCard p={0} py={2}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </DashboardCard>
  );
};

export default LossesDailyLineChartCard;
