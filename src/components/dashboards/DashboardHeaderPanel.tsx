import { Heading, SimpleGrid } from "@chakra-ui/react";
import { Area } from "../../entities/areas";
import { Asset } from "../../entities/assets";
import DashboardAssetSelectInput from "./DashboardAssetSelectInput";
import DashboardLocationInfo from "./DashboardLocationInfo";
import DashboardLogo from "./DashboardLogo";
import DashboardTimeSelectInput from "./DashboardTimeSelectInput";

interface Props {
  area: Area;
  asset: Asset;
}

const DashboardHeaderPanel = ({ area, asset }: Props) => {
  if (!area?.asset.find((ass) => ass.id === asset?.id))
    return (
      <Heading>{`The asset: ${asset?.name} is not exists in area: ${area?.name}`}</Heading>
    );
  return (
    <SimpleGrid
      templateColumns={"225px repeat(3, 1fr)"}
      gridTemplateRows={"1fr"}
      gap={5}
    >
      <DashboardLogo />
      <DashboardLocationInfo areaName={area.name} assetName={asset.name} />
      <DashboardAssetSelectInput assetName={asset.name} />
      <DashboardTimeSelectInput />
    </SimpleGrid>
  );
};

export default DashboardHeaderPanel;
