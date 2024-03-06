import ReactApexChart from "react-apexcharts";
import semiGaugeOptions from "../../../constants/semiGaugeOptions";

const PerformanceGauge = ({ usefulWorkRatio }: { usefulWorkRatio: number }) => {
  return (
    <ReactApexChart
      series={[usefulWorkRatio]}
      options={semiGaugeOptions}
      type="radialBar"
      height={380}
    />
  );
};

export default PerformanceGauge;
