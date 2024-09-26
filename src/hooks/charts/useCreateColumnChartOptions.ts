import { ApexOptions } from "apexcharts";
import _ from "lodash";
import columnChartOptions from "../../constants/columnChartOptions";
import { Asset } from "../../entities/assets";
import useAreaAttributesByType from "./useAreaAttributesByType";
import useAreaLosses from "./useAreaLosses";
import { manageableLoss, unmanageableLoss } from "../../constants/lossTypes";

const useCreateColumnChartOptions = (assets: Asset[]) => {
  const assetDesignLosses = useAreaLosses(
    useAreaAttributesByType(assets, manageableLoss)
  );
  const assetOperatingLosses = useAreaLosses(
    useAreaAttributesByType(assets, unmanageableLoss)
  );

  if (!assetDesignLosses) return null;

  if (!assetOperatingLosses) return null;

  const dataset = assets?.map((asset: Asset) => ({
    id: asset.id,
    name: asset.name,
    losses: {
      manageable:
        _.sum(asset.children.map((child) => assetDesignLosses![child.id])) || 0,
      unmanageable:
        _.sum(asset.children.map((child) => assetOperatingLosses![child.id])) ||
        0,
    },
  }));

  const sortedDataset = _.reverse(
    _.sortBy(dataset, [
      (array) => array.losses.manageable + array.losses.unmanageable,
    ])
  );

  const filteredDataset = sortedDataset.slice(0, 15);

  console.log(filteredDataset);

  const series = [
    {
      name: "Manageable Losses",
      data: filteredDataset.map((item) => item.losses["manageable"]),
    },
    {
      name: "Unamanageable Losses",
      data: filteredDataset.map((item) => item.losses["unmanageable"]),
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
