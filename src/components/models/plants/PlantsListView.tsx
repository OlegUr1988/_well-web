import _ from "lodash";
import { useAssets } from "../../../hooks/assets";
import ListView from "../ListView";
import PlantCreateButton from "./PlantCreateButton";
import PlantsList from "./PlantsList";

const PlantsListView = () => {
  const { data: assets, isLoading, error } = useAssets({});

  const plants = assets?.filter((asset) => _.isNull(asset.parentAssetId));

  if (!plants) return null;

  return (
    <ListView
      title="Plant"
      isLoading={isLoading}
      error={error}
      listComponent={<PlantsList plants={plants!} />}
      createButtonComponent={plants!.length >= 1 ? null : <PlantCreateButton />}
    />
  );
};

export default PlantsListView;
