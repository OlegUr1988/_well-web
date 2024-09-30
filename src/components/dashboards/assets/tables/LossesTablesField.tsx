import { Box, Heading } from "@chakra-ui/react";
import { Asset } from "../../../../entities/assets";
import LossesTable from "./LossesTable";

interface Props {
  assets: Asset[];
  parentAsset: Asset;
}

const LossesTablesField = ({ assets, parentAsset }: Props) => {
  return (
    <>
      {assets?.map((asset) => (
        <Box key={asset.id}>
          <Heading size="sm">{asset.name}</Heading>
          <Box mb={3}>
            <LossesTable asset={asset} parentAsset={parentAsset} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default LossesTablesField;
