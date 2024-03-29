import { SimpleGrid } from "@chakra-ui/react";
import DashboardLogo from "./DashboardLogo";
import DashboardTimeSelectInput from "./DashboardTimeSelectInput";

const AreaLevelDashboardHeaderPanel = () => {
  return (
    <SimpleGrid
      templateColumns={"225px repeat(2, 1fr)"}
      gridTemplateRows={"1fr"}
      gap={5}
    >
      <DashboardLogo />
      <DashboardTimeSelectInput />
    </SimpleGrid>
  );
};

export default AreaLevelDashboardHeaderPanel;
