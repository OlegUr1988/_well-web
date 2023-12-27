import { useParts } from "../../hooks/parts";
import useModelStore from "../../store/model";
import ListView from "../ListView";
import PartsCreateButton from "./PartsCreateButton";
import PartsList from "./PartsList";

const PartsListView = () => {
  const { equipmentId } = useModelStore((s) => s.modelQuery);
  const { data: parts, isLoading, error } = useParts({ equipmentId });
  if (equipmentId == 0) return null;

  return (
    <ListView
      title="Equipment Parts"
      isLoading={isLoading}
      error={error}
      listComponent={<PartsList parts={parts!} />}
      createButtonComponent={<PartsCreateButton equipmentId={equipmentId} />}
    />
  );
};

export default PartsListView;
