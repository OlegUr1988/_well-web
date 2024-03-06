import { useAssets } from "../../../hooks/assets";
import useModelStore from "../../../store/model";
import ListView from "../ListView";
import AssetCreateButton from "./AssetCreateButton";
import AssetsList from "./AssetsList";

const AssetsListView = () => {
  const { areaId } = useModelStore((s) => s.modelQuery);
  const { data: equipments, isLoading, error } = useAssets({ areaId });
  if (areaId == 0) return null;

  return (
    <ListView
      title="Assets"
      isLoading={isLoading}
      error={error}
      listComponent={<AssetsList assets={equipments!} />}
      createButtonComponent={<AssetCreateButton areaId={areaId} />}
    />
  );
};

export default AssetsListView;
