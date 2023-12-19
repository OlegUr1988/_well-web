import { useImportAssetsFromExcel } from "../../hooks/assets";
import ImportButton from "../ImportButton";

const AssetsImportButton = () => {
  const { mutateAsync } = useImportAssetsFromExcel();

  return (
    <ImportButton
      mutateAsync={mutateAsync}
      successMessage="Assets were updated."
      routeAfterImport="/config/assets"
    />
  );
};

export default AssetsImportButton;
