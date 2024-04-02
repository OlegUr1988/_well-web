import { ApexOptions } from "apexcharts";
import numeral from "numeral";

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
  yaxis: {
    labels: {
      formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    },
  },
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
  tooltip: {
    y: {
      formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    },
  },
};

export default productionLineChartOptions;
