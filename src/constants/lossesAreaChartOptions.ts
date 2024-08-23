import { ApexOptions } from "apexcharts";
import numeral from "numeral";
import { trendPalette } from "./colorPalettes";

const areaChartOptions: ApexOptions = {
  chart: {
    type: "area",
    toolbar: {
      show: true,
    },
    stacked: true,
    events: { mounted: (chart) => chart.windowResizeHandler() },
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    offsetY: -5,
  },
  title: {
    align: "center",
  },
  colors: trendPalette,
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
  fill: {
    type: "solid",
  },
  tooltip: {
    y: {
      formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
    },
  },
};

export default areaChartOptions;
