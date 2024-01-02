import CommandPanel from "../CommandPanel";
import UnitsCreateButton from "./UnitsCreateButton";

const UnitsCommandPanel = () => {
  return <CommandPanel createButton={<UnitsCreateButton />} />;
};

export default UnitsCommandPanel;
