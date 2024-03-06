import { useAreas } from "../../../hooks/areas";
import ListView from "../ListView";
import AreaCreateButton from "./AreaCreateButton";
import AreasList from "./AreasList";

const AreasListView = () => {
  const { data: assets, isLoading, error } = useAreas({});

  return (
    <ListView
      title="Areas"
      isLoading={isLoading}
      error={error}
      listComponent={<AreasList areas={assets!} />}
      createButtonComponent={<AreaCreateButton />}
    />
  );
};

export default AreasListView;
