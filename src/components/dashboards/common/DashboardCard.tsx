import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  p?: number;
  py?: number;
  h?: string | number;
  children: ReactNode;
}

const DashboardCard = ({ p = 2, py, h, children }: Props) => {
  return (
    <Card
      p={p}
      py={py}
      h={h}
      border="1px solid #ccc"
      rounded="md"
      boxShadow="lg"
    >
      {children}
    </Card>
  );
};

export default DashboardCard;
