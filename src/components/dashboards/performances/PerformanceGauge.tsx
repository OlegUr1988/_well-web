import ReactApexChart from "react-apexcharts";
import semiGaugeOptions from "../../../constants/semiGaugeOptions";
import { ApexOptions } from "apexcharts";

interface Props {
  usefulWorkRatio: number;
  height?: number;
}

const PerformanceGauge = ({ usefulWorkRatio, height = 380 }: Props) => {
  const options: ApexOptions = {
    ...semiGaugeOptions,
    chart: {
      ...semiGaugeOptions.chart,
      height,
    },
  };
  return (
    <ReactApexChart
      series={[usefulWorkRatio]}
      options={options}
      type="radialBar"
      height={height}
    />
  );
};

export default PerformanceGauge;
