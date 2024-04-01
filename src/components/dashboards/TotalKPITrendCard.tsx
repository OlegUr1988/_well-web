import { Heading } from "@chakra-ui/react";
import DashboardCard from "./DashboardCard";
import { Asset } from "../../entities/assets";
import { Trend } from "../../store/dashboard";
import _ from "lodash";
import useGetRecords from "../../hooks/useGetRecords";
import { getArrayOfSums, groupBy } from "../../utils/records";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface Props {
  plant: Asset;
  trendType: Trend;
}

const PlantTotalKPITrendCard = ({ plant, trendType }: Props) => {
  // Targets for asset
  const {
    productionTarget,
    energyConsumptionTarget,
    specificEnergyConsupmtionTarget,
  } = plant.target;

  let target = 0;

  // Get assignments
  const attributes = _.flatten(plant.attributes);
  const assignments = _.flatten(attributes.map((attr) => attr.assignments));
  const productionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "production"
  );
  const consumptionAssignments = assignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "total energy consumption"
  );

  // Get Records
  const { records: productions, isLoading: isProductionsLoading } =
    useGetRecords(productionAssignments);
  const {
    records: energyConsumptions,
    isLoading: isEnergyConsumptionsLoading,
  } = useGetRecords(consumptionAssignments);

  const isLoading = isProductionsLoading || isEnergyConsumptionsLoading;

  if (isLoading) return null;

  let series: {
    name: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];

  // Calculate productions
  if (trendType === "production") {
    const productionGroups = groupBy(productions, "timestamp");

    series = [
      {
        name: "Production",
        data: _.map(
          _.entries(getArrayOfSums(productionGroups)),
          ([key, value]) => ({
            x: key,
            y: value,
          })
        ),
      },
    ];

    target = productionTarget;
  }

  if (trendType === "energy consumption") {
    const energyConsumptionGroups = groupBy(energyConsumptions, "timestamp");
    series = [
      {
        name: "Energy consumption",
        data: _.map(
          _.entries(getArrayOfSums(energyConsumptionGroups)),
          ([key, value]) => ({
            x: key,
            y: value,
          })
        ),
      },
    ];

    target = energyConsumptionTarget;
  }

  if (trendType === "specific energy consumption") {
    const productionGroups = groupBy(productions, "timestamp");
    const energyConsumptionGroups = groupBy(energyConsumptions, "timestamp");
    const sumOfProductions = getArrayOfSums(productionGroups);
    const sumOfEnergyConsumptions = getArrayOfSums(energyConsumptionGroups);
    const specificEnergyConsumptionGroups = _.mapValues(
      _.zipObject(_.keys(sumOfProductions), _.values(sumOfEnergyConsumptions)),
      (val, key) => {
        return sumOfProductions[key] / val;
      }
    );

    series = [
      {
        name: "Specific energy consumptions",
        data: _.map(
          _.entries(specificEnergyConsumptionGroups!),
          ([key, value]) => ({
            x: key,
            y: value,
          })
        ),
      },
    ];

    target = specificEnergyConsupmtionTarget;
  }

  const minValue = _.minBy(series![0].data, "y")!.y;
  const maxValue = _.maxBy(series![0].data, "y")!.y;

  const min = _.min([minValue, target])! * 0.8;
  const max = _.max([maxValue, target])! * 1.2;

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
          y: target,
          borderColor: "#00E396",
          borderWidth: 4,
          strokeDashArray: 0,
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Target " + target,
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

export default PlantTotalKPITrendCard;
