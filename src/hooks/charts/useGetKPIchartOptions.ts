import _ from "lodash";
import productionLineChartOptions from "../../constants/productionLineChartOptions";
import { Asset } from "../../entities/assets";
import { Trend } from "../../store/dashboard";
import { getArrayOfSums, groupBy } from "../../utils/records";
import useGetRecords from "../useGetRecords";

const useGetKPIchartOptions = (asset: Asset, trendType: Trend) => {
  // Targets for asset
  const {
    productionTarget,
    energyConsumptionTarget,
    specificEnergyConsupmtionTarget,
  } = asset.target;

  let target = 0;

  // Get assignments
  const attributes = _.flatten(asset.attributes);
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

  let series: {
    name: string;
    data: {
      x: string;
      y: number;
    }[];
  }[] = [];

  if (isLoading) return { isLoading, series, options: {} };

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

  if (!series[0].data.length)
    return {
      isLoading,
      series: [],
      options: {},
    };

  const minValue = _.minBy(series![0].data, "y")!.y;
  const maxValue = _.maxBy(series![0].data, "y")!.y;

  const min = _.min([minValue, target])! * 0.8;
  const max = _.max([maxValue, target])! * 1.2;

  const annotationsYAxis = productionLineChartOptions.annotations?.yaxis || [];

  const options = {
    ...productionLineChartOptions,
    yaxis: {
      ...productionLineChartOptions.yaxis,
      max: max,
      min: min,
    },
    annotations: {
      ...productionLineChartOptions.annotations,
      yaxis: [
        {
          ...(annotationsYAxis[0] || {}),
          y: target,
          label: {
            ...annotationsYAxis[0].label,
            text: "Target " + target,
          },
        },
      ],
    },
  };

  return { isLoading, series, options };
};

export default useGetKPIchartOptions;
