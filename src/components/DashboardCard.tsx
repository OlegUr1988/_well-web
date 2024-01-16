import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  p?: number;
  display?:
    | "flex"
    | "inline-flex"
    | "block"
    | "inline"
    | "inline-block"
    | "none";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  children: ReactNode;
}

const DashboardCard = ({
  p,
  alignItems,
  justifyItems,
  justifyContent,
  children,
}: Props) => {
  return (
    <Box
      p={p}
      boxShadow="lg"
      rounded="md"
      border="1px solid #ddd"
      alignItems={alignItems}
      justifyItems={justifyItems}
      justifyContent={justifyContent}
    >
      {children}
    </Box>
  );
};

export default DashboardCard;
