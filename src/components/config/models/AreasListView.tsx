import _ from "lodash";
import { useAssets } from "../../../hooks/assets";
import ListView from "../ListView";
import AreaCreateButton from "./AreaCreateButton";
import AreasList from "./AreasList";

const AreasListView = () => {
  const { data: assets, isLoading, error } = useAssets({});

  const areas = assets?.filter((asset) => _.isNull(asset.parentAssetId));

  return (
    <ListView
      title="Areas"
      isLoading={isLoading}
      error={error}
      listComponent={<AreasList areas={areas!} />}
      createButtonComponent={<AreaCreateButton />}
    />
  );
};

export default AreasListView;
