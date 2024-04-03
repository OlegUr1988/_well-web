import { Asset } from "../../entities/assets";
import useDashboardsStore from "../../store/dashboard";
import AreaLossesCard from "./AreaLossesCard";
import AreaTotalCO2EmissionKPITrendCard from "./AreaTotalCO2EmissionKPITrendCard";
import TotalKPITrendCard from "./TotalKPITrendCard";

const AreaKPITrends = ({ area }: { area: Asset }) => {
  const { trend } = useDashboardsStore((s) => s.dashboardQuery);
  return (
    <>
      {trend === "bad actors" && <AreaLossesCard area={area} />}
      {trend === "production" && (
        <TotalKPITrendCard asset={area!} trendType="production" />
      )}
      {trend === "energy consumption" && (
        <TotalKPITrendCard asset={area!} trendType="energy consumption" />
      )}
      {trend === "specific energy consumption" && (
        <TotalKPITrendCard
          asset={area!}
          trendType="specific energy consumption"
        />
      )}
      {trend === "CO2 emission" && (
        <AreaTotalCO2EmissionKPITrendCard plant={area!} />
      )}
    </>
  );
};

export default AreaKPITrends;
