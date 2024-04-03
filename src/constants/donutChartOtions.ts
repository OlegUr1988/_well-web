import { ApexOptions } from "apexcharts";
import numeral from "numeral";

const donutChartOptions: ApexOptions = {
  chart: {
    type: "donut",
  },
  legend: {
    position: "bottom",
  },
  tooltip: {
    y: {
      formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    },
  },
};

export default donutChartOptions;
