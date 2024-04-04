import { ApexOptions } from "apexcharts";
import numeral from "numeral";

const columnChartOptions: ApexOptions = {
  chart: {
    type: "bar",
    height: 400,
    stacked: true,
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top",
      },
    },
  },
  colors: ["#008FFB", "#FEB019"],
  dataLabels: {
    formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
  },
  xaxis: {},
  yaxis: {
    labels: {
      formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    },
  },
  tooltip: {
    y: {
      formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    },
  },
};

export default columnChartOptions;
