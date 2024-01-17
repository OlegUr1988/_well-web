import { Tag, Text, VStack } from "@chakra-ui/react";
import { DashboardCard } from ".";

const DashboardAssetSelectInput = ({ assetName }: { assetName: string }) => {
  return (
    <DashboardCard>
      <VStack gap={0} align="start" rowGap={1}>
        <Text fontSize={16}>Select Asset:</Text>
        <Tag>{assetName}</Tag>
      </VStack>
    </DashboardCard>
  );
};

export default DashboardAssetSelectInput;
