import { useImportAssetsFromExcel } from "../../hooks/assets";
import CommandPanel from "../CommandPanel";
import ExportButton from "../ExportButton";
import ImportButton from "../ImportButton";

const AssetsCommandPanel = () => {
  const { mutateAsync } = useImportAssetsFromExcel();
  return (
    <CommandPanel
      createPath="/config/assets/new"
      createLabel="Create"
      exportButton={<ExportButton url="/assets/exportToExcel" />}
      importButton={
        <ImportButton
          mutateAsync={mutateAsync}
          successMessage="Assets were updated."
          routeAfterImport="/config/assets"
        />
      }
    />
  );
};

export default AssetsCommandPanel;
