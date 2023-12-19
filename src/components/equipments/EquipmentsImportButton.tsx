import { useImportEquipmentsFromExcel } from "../../hooks/equipments";
import ImportButton from "../ImportButton";

const EquipmentsImportButton = () => {
  const { mutateAsync } = useImportEquipmentsFromExcel();

  return (
    <ImportButton
      mutateAsync={mutateAsync}
      successMessage="Equipments were updated."
      routeAfterImport="/config/equipments"
    />
  );
};

export default EquipmentsImportButton;
