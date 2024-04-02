import { ApexOptions } from "apexcharts";
import numeral from "numeral";

const lineChartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    offsetY: -5,
  },
  title: {
    align: "center",
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
    padding: { right: 30, top: 10 },
  },
  markers: {
    size: 5,
    hover: {
      size: 8,
    },
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
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
  },
  tooltip: {
    y: {
      formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    },
  },
};

export default lineChartOptions;
