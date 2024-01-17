import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DashboardCard = ({ children }: Props) => {
  return (
    <Card p={3} border="1px solid #ccc" rounded="md" boxShadow="lg">
      {children}
    </Card>
  );
};

export default DashboardCard;
