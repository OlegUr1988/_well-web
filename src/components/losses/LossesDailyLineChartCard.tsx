import { ApexOptions } from "apexcharts";
import {
  DashboardCard,
  DashboardCardErrorMessage,
  DashboardCardSkeleton,
} from "../dashboards";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import { useEquipments } from "../../hooks/equipments";
import _ from "lodash";
import useGetLossesByType from "../../hooks/useGetLossesByType";
import useGetRecords from "../../hooks/useGetRecords";

const LossesDailyLineChartCard = ({ asset }: { asset: Asset }) => {
  // fetching equipments
  const {
    data: equipments,
    isLoading,
    error,
  } = useEquipments({ assetId: asset.id });

  // getting attributes
  const allAttributes = _.flatten(equipments?.map((eq) => eq.attribute));
  const attributes = useGetLossesByType(allAttributes, "loss");

  // getting assignments
  const assignments = _.flatten(attributes.map((attr) => attr.assignment));

  // getting records
  const { records } = useGetRecords(assignments);
  const filteredRecords = records?.filter(
    (record) => record.PHDTag.unit.name === "kWh"
  );
  const groupedRecords = _.groupBy(filteredRecords, "PHDTagId");
  const cleanedRecords = _.mapValues(groupedRecords, (value) =>
    _.uniqBy(value, "value")
  );
  // filtering assignments
  const ids = _.flatten(filteredRecords?.map((r) => r.PHDTagId));
  const filteredAssignments = assignments.filter((ass) =>
    ids.includes(ass.PHDTagId)
  );

  // setting series
  const series = filteredAssignments.map((a) => ({
    name: a.attribute.name,
    data: cleanedRecords[a.PHDTagId].map((r) => ({
      x: r.timestamp,
      y: r.value,
    })),
  }));

  if (isLoading) return <DashboardCardSkeleton />;

  if (error) return <DashboardCardErrorMessage />;

  const options: ApexOptions = {
    series: series,
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <DashboardCard>
      <ReactApexChart
        options={options}
        series={options.series}
        type="line"
        height={350}
      />
    </DashboardCard>
  );
};

export default LossesDailyLineChartCard;
