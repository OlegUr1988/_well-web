import { SimpleGrid } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { DashboardLogo, DashboardTimeSelectInput } from "../common/";
import AreaLevelDashboardSelectInput from "./AreaLevelDashboardSelectInput";

const AreaLevelDashboardHeaderPanel = ({ area }: { area: Asset }) => {
  return (
    <SimpleGrid
      templateColumns={"225px repeat(2, 1fr)"}
      gridTemplateRows={"1fr"}
      gap={5}
    >
      <DashboardLogo />
      <AreaLevelDashboardSelectInput area={area} />
      <DashboardTimeSelectInput />
    </SimpleGrid>
  );
};

export default AreaLevelDashboardHeaderPanel;
