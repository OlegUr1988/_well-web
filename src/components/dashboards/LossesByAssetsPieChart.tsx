import { ApexOptions } from "apexcharts";
import _ from "lodash";
import ReactApexChart from "react-apexcharts";
import { Asset } from "../../entities/assets";
import useAreaAttributesByType from "../../hooks/useAreaAttributesByType";
import useAreaLosses from "../../hooks/useAreaLosses";
import numeral from "numeral";

const LossesByAssetsPieChart = ({ assets }: { assets: Asset[] }) => {
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

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels,
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: (val) => numeral(val).format("0.0aa").toUpperCase(),
      },
    },
  };

  return (
    <ReactApexChart
      series={series}
      options={options}
      width="100%"
      type="donut"
    />
  );
};

export default LossesByAssetsPieChart;
