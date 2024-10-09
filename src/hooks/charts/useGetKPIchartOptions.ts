import _ from "lodash";
import productionLineChartOptions from "../../constants/productionLineChartOptions";
import { heatType } from "../../constants/utilityTypes";
import { Asset } from "../../entities/assets";
import { Trend } from "../../store/dashboard";
import { getArrayOfSums, groupBy } from "../../utils/records";
import { useAssets, useAssetsByIds } from "../assets";
import useGetRecords from "../useGetRecords";
import useUtilityTypes from "../useUtilityTypes";

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

  // Get Utilities
  const { data: utilities, isLoading: isUtilitiesLoading } = useUtilityTypes();

  const heatUtility = utilities?.find(
    (utility) => utility.name.toLowerCase() === heatType
  );

  // Get production assignments
  const entityAttributes = _.flatten(entity.attributes);
  const entityAssignments = _.flatten(
    entityAttributes.map((attr) => attr.assignments)
  );
  const productionAssignments = entityAssignments.filter(
    (ass) => ass.attribute.name.toLowerCase() === "production"
  );

  // Get Production Records
  const { records: productions, isLoading: isProductionsLoading } =
    useGetRecords(productionAssignments);

  // Get Energy Consumption Assignments
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

  const filteredAssets = assets?.filter(
    (asset) => asset.utilityTypeId !== heatUtility?.id
  );

  const attributesForPlant = filteredAssets
    ? _.flatten(filteredAssets.map((asset) => asset.attributes))
    : [];
  const assignmentsForPlant = _.flatten(
    attributesForPlant.map((attr) => attr?.assignments || [])
  );

  // Get Area assignments
  const filteredChildren = entity.children.filter(
    (asset) => asset.utilityTypeId !== heatUtility?.id
  );

  const attributesForArea = _.flatten(
    filteredChildren.map((asset) => asset.attributes)
  );
  const assignmentsForArea = _.flatten(
    attributesForArea.map((attr) => attr.assignments)
  );

  const assignments = isPlant ? assignmentsForPlant : assignmentsForArea;

  // Get Assets Records
  const { records: assetsRecords, isLoading: isRecordsLoading } =
    useGetRecords(assignments);

  const isLoading =
    isUtilitiesLoading ||
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

  const minValue = _.minBy(series![0].data, "y")?.y;
  const maxValue = _.maxBy(series![0].data, "y")?.y;

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
