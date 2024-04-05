import { Center } from "@chakra-ui/react";
import DashboardCard from "./DashboardCard";

const DashboardLogo = () => {
  return (
    <DashboardCard>
      <Center
        fontSize={36}
        fontWeight={700}
        h="100%"
        color="red"
        textAlign="center"
      >
        Honeywell
      </Center>
    </DashboardCard>
  );
};

export default DashboardLogo;
