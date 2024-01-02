import { useImportPHDTagsFromExcel } from "../../hooks/PHDTags";
import CommandPanel from "../CommandPanel";
import ExportButton from "../ExportButton";
import ImportButton from "../ImportButton";

const PHDTagsCommandPanel = () => {
  const { mutateAsync } = useImportPHDTagsFromExcel();
  return (
    <CommandPanel
      createButton={<></>}
      exportButton={<ExportButton url="/phd-tags/exportToExcel" />}
      importButton={
        <ImportButton
          mutateAsync={mutateAsync}
          successMessage="PHD tags were updated"
          routeAfterImport="/config/phd-tags"
        />
      }
    />
  );
};

export default PHDTagsCommandPanel;
