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
      columnWidth: 50,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    formatter: (val: number) => {
      return numeral(val).format("0.0a").toUpperCase();
    },
  },
  xaxis: {},
  yaxis: {
    labels: {
      formatter: (val) => {
        return val.toFixed(0);
      },
    },
  },
};

export default columnChartOptions;
