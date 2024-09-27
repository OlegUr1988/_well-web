import { ApexOptions } from "apexcharts";
import _ from "lodash";
import columnChartOptions from "../../constants/columnChartOptions";
import { manageableLoss, unmanageableLoss } from "../../constants/losses";
import { Asset } from "../../entities/assets";
import useAreaAttributesByType from "./useAreaAttributesByType";
import useAreaLosses from "./useAreaLosses";

const useCreateColumnChartOptions = (assets: Asset[]) => {
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

  const series = [
    {
      name: unmanageableLoss,
      data: filteredDataset.map((item) => item.losses.unmanageableLoss),
    },
    {
      name: manageableLoss,
      data: filteredDataset.map((item) => item.losses.manageableLoss),
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
