import { LuChevronDownCircle, LuChevronRightCircle } from "react-icons/lu";
import IconButton from "./IconButton";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const CollapsibleButton = ({ isOpen, onClick }: Props) => {
  return (
    <IconButton
      size="xs"
      variant="unstyled"
      icon={isOpen ? <LuChevronDownCircle /> : <LuChevronRightCircle />}
      onClick={onClick}
    />
  );
};

export default CollapsibleButton;
