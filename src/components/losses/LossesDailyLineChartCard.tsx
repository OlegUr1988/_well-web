import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import { useEquipments } from "../../hooks/equipments";
import useCreateLineChartOptions from "../../hooks/useCreateLineChartOptions";
import {
  DashboardCard,
  DashboardCardErrorMessage,
  DashboardCardSkeleton,
} from "../dashboards";

const LossesDailyLineChartCard = ({ asset }: { asset: Asset }) => {
  const {
    data: equipments,
    isLoading,
    error,
  } = useEquipments({ assetId: asset.id });

  const { series, options } = useCreateLineChartOptions(equipments!);

  if (isLoading) return <DashboardCardSkeleton />;

  if (error || !series.length) return <DashboardCardErrorMessage />;

  return (
    <DashboardCard>
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
