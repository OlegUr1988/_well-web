import { Button, Flex } from "@chakra-ui/react";

interface Props {
  size?: string;
  btnColorScheme?: string;
  color?: string;
  variant?: string;
  icon: JSX.Element;
  w?: string | number;
  onClick: () => void;
}

const IconButton = ({
  size,
  btnColorScheme,
  color,
  variant = "outline",
  icon,
  w,
  onClick,
}: Props) => {
  return (
    <Button
      size={size}
      colorScheme={btnColorScheme}
      color={color}
      variant={variant}
      w={w}
      onClick={onClick}
    >
      <Flex align="center" justify="center">
        {icon}
      </Flex>
    </Button>
  );
};

export default IconButton;
