import _ from "lodash";
import { useAssets } from "../../../hooks/assets";
import useModelStore from "../../../store/model";
import ListView from "../ListView";
import AreaCreateButton from "./AreaCreateButton";
import AreasList from "./AreasList";

const AreasListView = () => {
  const { plantId } = useModelStore((s) => s.modelQuery);
  const { data: assets, isLoading, error } = useAssets({});
  if (plantId === 0) return null;

  const areas = assets?.filter((asset) => asset.parentAssetId === plantId);

  const sortedAreas = _.sortBy(areas, (area) => area.name.toLowerCase());

  return (
    <ListView
      title="Areas"
      isLoading={isLoading}
      error={error}
      listComponent={<AreasList areas={sortedAreas!} />}
      createButtonComponent={<AreaCreateButton plantId={plantId} />}
    />
  );
};

export default AreasListView;
