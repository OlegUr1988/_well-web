import { Button, Flex } from "@chakra-ui/react";

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
      <Flex align="center" justify="center">
        {icon}
      </Flex>
    </Button>
  );
};

export default IconEditButton;
