import { Asset } from "../../entities/assets";
import useDashboardsStore from "../../store/dashboard";
import PlantLossesCard from "./PlantLossesCard";
import PlantTotalCO2EmissionKPITrendCard from "./PlantTotalCO2EmissionKPITrendCard";
import TotalKPITrendCard from "./TotalKPITrendCard";

const PlantKPITrends = ({ plant }: { plant: Asset }) => {
  const { trend } = useDashboardsStore((s) => s.dashboardQuery);
  return (
    <>
      {trend === "bad actors" && <PlantLossesCard plant={plant} />}
      {trend === "production" && (
        <TotalKPITrendCard asset={plant!} trendType="production" />
      )}
      {trend === "energy consumption" && (
        <TotalKPITrendCard asset={plant!} trendType="energy consumption" />
      )}
      {trend === "specific energy consumption" && (
        <TotalKPITrendCard
          asset={plant!}
          trendType="specific energy consumption"
        />
      )}
      {trend === "CO2 emission" && (
        <PlantTotalCO2EmissionKPITrendCard plant={plant!} />
      )}
    </>
  );
};

export default PlantKPITrends;
