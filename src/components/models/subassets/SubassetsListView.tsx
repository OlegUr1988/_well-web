import { useAssets } from "../../../hooks/assets";
import useModelStore from "../../../store/model";
import ListView from "../ListView";
import SubassetCreateButton from "./SubassetCreateButton";
import SubassetsList from "./SubassetsList";

const SubassetsListView = () => {
  const { assetId } = useModelStore((s) => s.modelQuery);
  const { data, isLoading, error } = useAssets({});
  if (assetId == 0) return null;

  const assets = data?.filter((item) => item.parentAssetId === assetId);

  return (
    <ListView
      title="Subassets"
      isLoading={isLoading}
      error={error}
      listComponent={<SubassetsList assets={assets!} />}
      createButtonComponent={<SubassetCreateButton parentAssetId={assetId} />}
    />
  );
};

export default SubassetsListView;
