import _ from "lodash";
import donutChartOptions from "../../constants/donutChartOtions";
import { Asset } from "../../entities/assets";
import useAreaAttributesByType from "../useAreaAttributesByType";
import useAreaLosses from "../useAreaLosses";

const useCreateDonutChart = (assets: Asset[]) => {
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

  const labels = filteredDataset.map((item) => item.name);

  const series = filteredDataset.map((item) =>
    _.sum([item.losses["designLoss"], item.losses["operatingLoss"]])
  );

  const options = {
    ...donutChartOptions,
    labels,
  };

  return { series, options };
};

export default useCreateDonutChart;
