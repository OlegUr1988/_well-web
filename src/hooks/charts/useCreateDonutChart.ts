import _ from "lodash";
import donutChartOptions from "../../constants/donutChartOtions";
import { Asset } from "../../entities/assets";
import useAreaAttributesByType from "./useAreaAttributesByType";
import useAreaLosses from "./useAreaLosses";
import { manageableLoss, unmanageableLoss } from "../../constants/lossTypes";

const useCreateDonutChart = (assets: Asset[]) => {
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
      manageableLoss:
        _.sum(asset.children.map((child) => assetDesignLosses![child.id])) || 0,
      unmanageableLoss:
        _.sum(asset.children.map((child) => assetOperatingLosses![child.id])) ||
        0,
    },
  }));

  const sortedDataset = _.reverse(
    _.sortBy(dataset, [
      (array) => array.losses.manageableLoss + array.losses.unmanageableLoss,
    ])
  );

  const filteredDataset = sortedDataset.slice(0, 15);

  const labels = filteredDataset.map((item) => item.name);

  const series = filteredDataset.map((item) =>
    _.sum([item.losses["manageableLoss"], item.losses["unmanageableLoss"]])
  );

  const options = {
    ...donutChartOptions,
    labels,
  };

  return { series, options };
};

export default useCreateDonutChart;
