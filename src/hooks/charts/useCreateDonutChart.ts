import _ from "lodash";
import donutChartOptions from "../../constants/donutChartOtions";
import { manageableLoss, unmanageableLoss } from "../../constants/losses";
import { Asset } from "../../entities/assets";
import useAreaAttributesByType from "./useAreaAttributesByType";
import useAreaLosses from "./useAreaLosses";

const useCreateDonutChart = (assets: Asset[]) => {
  const assetUnmanageableLosses = useAreaLosses(
    useAreaAttributesByType(assets, unmanageableLoss)
  );
  const assetManageableLosses = useAreaLosses(
    useAreaAttributesByType(assets, manageableLoss)
  );

  if (!assetUnmanageableLosses) return null;

  if (!assetManageableLosses) return null;

  const dataset = assets?.map((asset: Asset) => ({
    id: asset.id,
    name: asset.name,
    losses: {
      unmanageableLoss:
        _.sum(
          asset.children.map((child) => assetUnmanageableLosses![child.id])
        ) || 0,
      manageableLoss:
        _.sum(
          asset.children.map((child) => assetManageableLosses![child.id])
        ) || 0,
    },
  }));

  const sortedDataset = _.reverse(
    _.sortBy(dataset, [
      (array) => array.losses.unmanageableLoss + array.losses.manageableLoss,
    ])
  );

  const filteredDataset = sortedDataset.slice(0, 15);

  const labels = filteredDataset.map((item) => item.name);

  const series = filteredDataset.map((item) =>
    _.sum([item.losses.unmanageableLoss, item.losses.manageableLoss])
  );

  const options = {
    ...donutChartOptions,
    labels,
  };

  return { series, options };
};

export default useCreateDonutChart;
