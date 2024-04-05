import { Show, SimpleGrid } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import { DashboardLogo, DashboardTimeSelectInput } from "../common/";
import AssetDashboardLocationInfo from "./AssetDashboardLocationInfo";
import AssetLevelDashboardSelectInput from "./AssetLevelDashboardSelectInput";

interface Props {
  area: Asset;
  asset: Asset;
}

const AssetLevelDashboardHeaderPanel = ({ area, asset }: Props) => {
  return (
    <SimpleGrid
      templateColumns={{
        base: "225px repeat(2, 1fr)",
        xl: "225px repeat(3, 1fr)",
      }}
      gridTemplateRows={"1fr"}
      gap={5}
    >
      <DashboardLogo />
      <Show above="xl">
        <AssetDashboardLocationInfo
          areaName={area.name}
          assetName={asset.name}
        />
      </Show>
      <AssetLevelDashboardSelectInput asset={asset} area={area} />
      <DashboardTimeSelectInput />
    </SimpleGrid>
  );
};

export default AssetLevelDashboardHeaderPanel;
