import { useImportEquipmentsFromExcel } from "../../hooks/equipments";
import CommandPanel from "../CommandPanel";
import ExportButton from "../ExportButton";
import ImportButton from "../ImportButton";

const EquipmentsCommandPanel = () => {
  const { mutateAsync } = useImportEquipmentsFromExcel();
  return (
    <CommandPanel
      createPath="/config/equipments/new"
      createLabel="Create"
      exportButton={<ExportButton url="/equipments/exportToExcel" />}
      importButton={
        <ImportButton
          mutateAsync={mutateAsync}
          successMessage="Equipments were updated."
          routeAfterImport="/config/equipments"
        />
      }
    />
  );
};

export default EquipmentsCommandPanel;
