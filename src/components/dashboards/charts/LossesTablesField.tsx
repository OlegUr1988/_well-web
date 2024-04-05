import { Box, Heading } from "@chakra-ui/react";
import { Asset } from "../../../entities/assets";
import LossesTable from "./LossesTable";

const LossesTablesField = ({ assets }: { assets: Asset[] }) => {
  return (
    <>
      {assets?.map((asset) => (
        <Box key={asset.id}>
          <Heading size="sm">{asset.name}</Heading>
          <Box mb={3}>
            <LossesTable asset={asset} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default LossesTablesField;
