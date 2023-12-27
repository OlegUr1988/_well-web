import { useAssets } from "../../hooks/assets";
import ListView from "../ListView";
import AssetCreateButton from "./AssetCreateButton";
import AssetsList from "./AssetsList";

const AssetsListView = () => {
  const { data: assets, isLoading, error } = useAssets({});

  return (
    <ListView
      title="Assets"
      isLoading={isLoading}
      error={error}
      listComponent={<AssetsList assets={assets!} />}
      createButtonComponent={<AssetCreateButton />}
    />
  );
};

export default AssetsListView;
