import { Divider, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import { DashboardCard } from "./common";

const DashboardLocationInfo = ({
  areaName,
  assetName,
}: {
  areaName: string;
  assetName: string;
}) => {
  return (
    <DashboardCard>
      <HStack>
        <VStack gap={1} align="start" rowGap={1}>
          <Text fontSize={16}>Area:</Text>
          <Tag>{areaName}</Tag>
        </VStack>
        <Divider orientation="vertical" />
        <VStack gap={1} align="start" rowGap={1}>
          <Text fontSize={16}>Asset:</Text>
          <Tag>{assetName}</Tag>
        </VStack>
      </HStack>
    </DashboardCard>
  );
};

export default DashboardLocationInfo;
