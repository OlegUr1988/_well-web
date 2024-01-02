import { useImportPHDTagsFromExcel } from "../../hooks/PHDTags";
import CommandPanel from "../CommandPanel";
import ExportButton from "../ExportButton";
import ImportButton from "../ImportButton";
import PHDTagCreateButton from "./PHDTagCreateButton";

const PHDTagsCommandPanel = () => {
  const { mutateAsync } = useImportPHDTagsFromExcel();
  return (
    <CommandPanel
      createButton={<PHDTagCreateButton />}
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
