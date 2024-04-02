import { Heading } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import _ from "lodash";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import { useAssets, useAssetsByIds } from "../../hooks/assets";
import { useConstantByName } from "../../hooks/constants";
import useGetRecords from "../../hooks/useGetRecords";
import { getArrayOfSums, groupBy } from "../../utils/records";
import DashboardCard from "./DashboardCard";

interface Props {
  plant: Asset;
}

const PlantTotalCO2EmissionKPITrendCard = ({ plant }: Props) => {
  // Targets for asset
  const { CO2EmissionTarget } = plant.target;

  const { data: constant, isLoading: isCO2CoefficientLoading } =
    useConstantByName("CO2 conversion coefficient");
  const CO2coefficient = constant?.value || 0;

  const areasIds = plant.children.map((area) => area.id);
  const { data: areas, isLoading: isAreasLoading } = useAssets({
    ids: areasIds,
  });

  const assetIds = _.flatten(
    areas?.map((area) => area.children.map((asset) => asset.id))
  );
  const { data: assets, isLoading: isAssetsLoading } = useAssetsByIds({
    ids: assetIds,
  });

  const attributes = assets
    ? _.flatten(assets.map((asset) => asset.attributes))
    : [];
  const assignments = _.flatten(
    attributes.map((attr) => (attr ? attr.assignments : []))
  );

  // Get Records
  const { records: assetsRecords, isLoading: isRecordsLoading } =
    useGetRecords(assignments);

  const isLoading =
    isCO2CoefficientLoading ||
    isAreasLoading ||
    isAssetsLoading ||
    isRecordsLoading;

  if (isLoading) return null;

  const recordGroups = groupBy(assetsRecords, "timestamp");
  const arrayOftotalRecords = getArrayOfSums(recordGroups);
  const CO2EmiisonGroups = _.mapValues(
    arrayOftotalRecords,
    (val) => val * CO2coefficient
  );
  const series = [
    {
      name: "Specific energy consumptions",
      data: _.map(_.entries(CO2EmiisonGroups!), ([key, value]) => ({
        x: key,
        y: value,
      })),
    },
  ];

  const minValue = _.minBy(series![0].data, "y")!.y;
  const maxValue = _.maxBy(series![0].data, "y")!.y;

  const min = _.min([minValue, CO2EmissionTarget])! * 0.8;
  const max = _.max([maxValue, CO2EmissionTarget])! * 1.2;

  const options: ApexOptions = {
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
      max: max,
      min: min,
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
          y: CO2EmissionTarget,
          borderColor: "#00E396",
          borderWidth: 4,
          strokeDashArray: 0,
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Target " + CO2EmissionTarget,
          },
        },
      ],
    },
  };

  return (
    <DashboardCard>
      <Heading fontSize="xl">Production</Heading>
      <ReactApexChart
        options={options}
        series={series!}
        type="line"
        height={400}
      />
    </DashboardCard>
  );
};

export default PlantTotalCO2EmissionKPITrendCard;
