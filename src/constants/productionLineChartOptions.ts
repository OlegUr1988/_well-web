import { ApexOptions } from "apexcharts";

const productionLineChartOptions: ApexOptions = {
  chart: {
    type: "line",
  },
  xaxis: {
    type: "datetime",
    labels: {
      datetimeUTC: false,
    },
    title: {
      text: "Timestamp",
    },
  },
  yaxis: {},
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  annotations: {
    yaxis: [
      {
        borderColor: "#00E396",
        borderWidth: 4,
        strokeDashArray: 0,
        label: {
          borderColor: "#00E396",
          style: {
            color: "#fff",
            background: "#00E396",
          },
        },
      },
    ],
  },
};

export default productionLineChartOptions;
