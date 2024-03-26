import _ from "lodash";
import { useAssets } from "../../../hooks/assets";
import ListView from "../ListView";
import PlantCreateButton from "./PlantCreateButton";
import PlantsList from "./PlantsList";

const PlantsListView = () => {
  const { data: assets, isLoading, error } = useAssets({});

  const areas = assets?.filter((asset) => _.isNull(asset.parentAssetId));

  return (
    <ListView
      title="Plant"
      isLoading={isLoading}
      error={error}
      listComponent={<PlantsList areas={areas!} />}
      createButtonComponent={<PlantCreateButton />}
    />
  );
};

export default PlantsListView;
