import { useEquipments } from "../../../hooks/equipments";
import useModelStore from "../../../store/model";
import ListView from "../ListView";
import EquipmentCreateButton from "./EquipmentCreateButton";
import EquipmentsList from "./EquipmentsList";

const EquipmentsListView = () => {
  const { assetId } = useModelStore((s) => s.modelQuery);
  const { data: parts, isLoading, error } = useEquipments({ assetId });
  if (assetId == 0) return null;

  return (
    <ListView
      title="Equipments"
      isLoading={isLoading}
      error={error}
      listComponent={<EquipmentsList equipments={parts!} />}
      createButtonComponent={<EquipmentCreateButton assetId={assetId} />}
    />
  );
};

export default EquipmentsListView;
