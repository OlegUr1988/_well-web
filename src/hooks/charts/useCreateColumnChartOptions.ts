import { ApexOptions } from "apexcharts";
import _ from "lodash";
import columnChartOptions from "../../constants/columnChartOptions";
import { Asset } from "../../entities/assets";
import useAreaAttributesByType from "./useAreaAttributesByType";
import useAreaLosses from "./useAreaLosses";

const useCreateColumnChartOptions = (assets: Asset[]) => {
  const assetDesignLosses = useAreaLosses(
    useAreaAttributesByType(assets, "design loss")
  );
  const assetOperatingLosses = useAreaLosses(
    useAreaAttributesByType(assets, "operating loss")
  );

  if (!assetDesignLosses) return null;

  if (!assetOperatingLosses) return null;

  const dataset = assets?.map((asset: Asset) => ({
    id: asset.id,
    name: asset.name,
    losses: {
      designLoss:
        _.sum(asset.children.map((child) => assetDesignLosses![child.id])) || 0,
      operatingLoss:
        _.sum(asset.children.map((child) => assetOperatingLosses![child.id])) ||
        0,
    },
  }));

  const sortedDataset = _.reverse(
    _.sortBy(dataset, [
      (array) => array.losses.designLoss + array.losses.operatingLoss,
    ])
  );

  const filteredDataset = sortedDataset.slice(0, 15);

  const series = [
    {
      name: "Design Losses",
      data: filteredDataset.map((item) => item.losses["designLoss"]),
    },
    {
      name: "Operating Losses",
      data: filteredDataset.map((item) => item.losses["operatingLoss"]),
    },
  ];

  const options: ApexOptions = {
    ...columnChartOptions,
    xaxis: {
      ...columnChartOptions.xaxis,
      categories: filteredDataset.map((item) => item.name),
    },
  };

  return { series, options };
};

export default useCreateColumnChartOptions;
