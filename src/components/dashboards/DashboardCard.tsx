import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  p?: number;
  py?: number;
  children: ReactNode;
}

const DashboardCard = ({ p = 2, py, children }: Props) => {
  return (
    <Card p={p} py={py} border="1px solid #ccc" rounded="md" boxShadow="lg">
      {children}
    </Card>
  );
};

export default DashboardCard;
