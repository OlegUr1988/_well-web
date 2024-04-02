import _ from "lodash";
import productionLineChartOptions from "../constants/productionLineChartOptions";
import { Asset } from "../entities/assets";
import { getArrayOfSums, groupBy } from "../utils/records";
import { useAssets, useAssetsByIds } from "./assets";
import { useConstantByName } from "./constants";
import useGetRecords from "./useGetRecords";

const useGetPlantC02EmissionKPIchartOptions = (plant: Asset) => {
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

  if (isLoading) return { isLoading, series: [], options: {} };

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

  if (!series[0].data.length)
    return {
      isLoading,
      series: [],
      options: {},
    };

  const minValue = _.minBy(series![0].data, "y")!.y;
  const maxValue = _.maxBy(series![0].data, "y")!.y;

  const min = _.min([minValue, CO2EmissionTarget])! * 0.8;
  const max = _.max([maxValue, CO2EmissionTarget])! * 1.2;

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
          y: CO2EmissionTarget,
          label: {
            ...annotationsYAxis[0].label,
            text: "Target " + CO2EmissionTarget,
          },
        },
      ],
    },
  };

  return { isLoading, series, options };
};

export default useGetPlantC02EmissionKPIchartOptions;
