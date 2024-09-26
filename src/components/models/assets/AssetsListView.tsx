import _ from "lodash";
import { useAssets } from "../../../hooks/assets";
import useModelStore from "../../../store/model";
import ListView from "../ListView";
import AssetCreateButton from "./AssetCreateButton";
import AssetsList from "./AssetsList";

const AssetsListView = () => {
  const { areaId } = useModelStore((s) => s.modelQuery);
  const { data, isLoading, error } = useAssets({});
  if (areaId === 0) return null;

  const assets = data?.filter((item) => item.parentAssetId === areaId);

  const sortedAssets = _.sortBy(assets, asset => asset.name.toLowerCase())

  return (
    <ListView
      title="Assets"
      isLoading={isLoading}
      error={error}
      listComponent={<AssetsList assets={sortedAssets!} />}
      createButtonComponent={<AssetCreateButton areaId={areaId} />}
    />
  );
};

export default AssetsListView;
