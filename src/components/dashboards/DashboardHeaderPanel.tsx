import { Heading, Show, SimpleGrid } from "@chakra-ui/react";
import { Asset } from "../../entities/assets";
import DashboardAssetSelectInput from "./DashboardAssetSelectInput";
import DashboardLocationInfo from "./DashboardLocationInfo";
import DashboardLogo from "./DashboardLogo";
import DashboardTimeSelectInput from "./DashboardTimeSelectInput";

interface Props {
  area: Asset;
  asset: Asset;
}

const DashboardHeaderPanel = ({ area, asset }: Props) => {
  if (asset.parentAssetId !== area.id)
    return (
      <Heading>{`The asset: ${asset?.name} is not exists in area: ${area?.name}`}</Heading>
    );
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
        <DashboardLocationInfo areaName={area.name} assetName={asset.name} />
      </Show>
      <DashboardAssetSelectInput asset={asset} area={area} />
      <DashboardTimeSelectInput />
    </SimpleGrid>
  );
};

export default DashboardHeaderPanel;
