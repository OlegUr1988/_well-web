import { Button } from "@chakra-ui/react";

interface Props {
  size?: string;
  btnColor?: string;
  variant?: string;
  icon: JSX.Element;
  onClick: () => void;
}

const IconEditButton = ({
  size,
  btnColor,
  variant = "outline",
  icon,
  onClick,
}: Props) => {
  return (
    <Button
      size={size}
      colorScheme={btnColor}
      variant={variant}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};

export default IconEditButton;
