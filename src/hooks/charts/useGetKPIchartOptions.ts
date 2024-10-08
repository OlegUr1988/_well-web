import _ from "lodash";
import productionLineChartOptions from "../../constants/productionLineChartOptions";
import { Asset } from "../../entities/assets";
import { Trend } from "../../store/dashboard";
import { getArrayOfSums, groupBy } from "../../utils/records";
import useGetRecords from "../useGetRecords";
import { useAssets, useAssetsByIds } from "../assets";

const useGetKPIchartOptions = (
  entity: Asset,
  trendType: Trend,
  isPlant = false
) => {
  // Targets for asset
  const {
    productionTarget,
    energyConsumptionTarget,
    specificEnergyConsupmtionTarget,
  } = entity.target;

  let target = 0;

  // Get production assignments
  const entityAttributes = _.flatten(entity.attributes);
  const entityAssignments = _.flatten(
    entityAttributes.map((attr) => attr.assignments)
  );
  const productionAssignments = entityAssignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "production"
  );

  // Get Records
  const { records: productions, isLoading: isProductionsLoading } =
    useGetRecords(productionAssignments);

  // Get energy consumption assignments
  const areasIds = entity.children.map((area) => area.id);
  const { data: areas, isLoading: isAreasLoading } = useAssets({
    ids: areasIds,
  });
  const assetIds = _.flatten(
    areas?.map((area) => area.children.map((asset) => asset.id)) || []
  );

  const { data: assets, isLoading: isAssetsLoading } = useAssetsByIds({
    ids: assetIds,
  });

  const plantAttributes = assets
    ? _.flatten(assets.map((asset) => asset.attributes))
    : [];
  const plantAssignments = _.flatten(
    plantAttributes.map((attr) => attr?.assignments || [])
  );

  // Get Area assignments
  const assetAttributes = _.flatten(
    entity.children.map((asset) => asset.attributes)
  );
  const areaAssignments = _.flatten(
    assetAttributes.map((attr) => attr.assignments)
  );

  const assignments = isPlant ? plantAssignments : areaAssignments;

  // Get Assets Records
  const { records: assetsRecords, isLoading: isRecordsLoading } =
    useGetRecords(assignments);

  const isLoading =
    isProductionsLoading ||
    isAreasLoading ||
    isAssetsLoading ||
    isRecordsLoading;

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
    const energyConsumptionGroups = groupBy(assetsRecords, "timestamp");
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
    const energyConsumptionGroups = groupBy(assetsRecords, "timestamp");
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
