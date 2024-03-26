import _ from "lodash";
import { useAssets } from "../../../hooks/assets";
import ListView from "../ListView";
import AreaCreateButton from "./AreaCreateButton";
import AreasList from "./AreasList";
import useModelStore from "../../../store/model";

const AreasListView = () => {
  const { plantId } = useModelStore((s) => s.modelQuery);
  const { data: assets, isLoading, error } = useAssets({});
  if (plantId === 0) return null;

  const areas = assets?.filter((asset) => asset.parentAssetId === plantId);

  return (
    <ListView
      title="Areas"
      isLoading={isLoading}
      error={error}
      listComponent={<AreasList areas={areas!} />}
      createButtonComponent={<AreaCreateButton plantId={plantId} />}
    />
  );
};

export default AreasListView;
