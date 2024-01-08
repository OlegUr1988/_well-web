import { Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

const TooltipContainer = ({ label, children }: Props) => {
  return (
    <Tooltip label={label}>
      <span>{children}</span>
    </Tooltip>
  );
};

export default TooltipContainer;
