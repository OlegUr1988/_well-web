import { ApexOptions } from "apexcharts";

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
    bar: { columnWidth: 100 },
  },
  dataLabels: {
    formatter: (val: number) => {
      return val.toFixed(0);
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
