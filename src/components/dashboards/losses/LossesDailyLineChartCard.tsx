import ReactApexChart from "react-apexcharts";
import {
  DashboardCard,
  DashboardCardErrorMessage,
  DashboardCardSkeleton,
} from "..";
import { Asset } from "../../../entities/assets";
import { useEquipments } from "../../../hooks/equipments";
import useCreateLineChartOptions from "../../../hooks/useCreateLineChartOptions";

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
