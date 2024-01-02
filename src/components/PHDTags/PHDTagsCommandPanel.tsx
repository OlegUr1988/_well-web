import { useImportPHDTagsFromExcel } from "../../hooks/PHDTags";
import usePHDTagStore from "../../store/phdTags";
import CommandPanel from "../CommandPanel";
import ExportButton from "../ExportButton";
import ImportButton from "../ImportButton";
import PHDTagCreateButton from "./PHDTagCreateButton";

const PHDTagsCommandPanel = () => {
  const { mutateAsync } = useImportPHDTagsFromExcel();
  const setPage = usePHDTagStore((s) => s.setPage);

  return (
    <CommandPanel
      createButton={<PHDTagCreateButton />}
      exportButton={<ExportButton url="/phd-tags/exportToExcel" />}
      importButton={
        <ImportButton
          mutateAsync={mutateAsync}
          successMessage="PHD tags were updated"
          onSuccess={() => setPage(1)}
        />
      }
    />
  );
};

export default PHDTagsCommandPanel;
