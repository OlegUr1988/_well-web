import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import semiGaugeOptions from "../../../constants/semiGaugeOptions";

interface Props {
  usefulWorkRatio: number;
  height?: number;
}

const PerformanceGaugeChart = ({ usefulWorkRatio, height = 380 }: Props) => {
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

export default PerformanceGaugeChart;
