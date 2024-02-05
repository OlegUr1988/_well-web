import ReactApexChart from "react-apexcharts";
import semiGaugeOptions from "../../constants/semiGaugeOptions";

const PerformanceGauge = ({ usefulWorkRatio }: { usefulWorkRatio: number }) => {
  return (
    <ReactApexChart
      series={[usefulWorkRatio]}
      options={semiGaugeOptions}
      type="radialBar"
      height={300}
    />
  );
};

export default PerformanceGauge;
