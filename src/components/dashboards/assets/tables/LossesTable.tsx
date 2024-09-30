import { Table, TableContainer } from "@chakra-ui/react";
import { lossTypes } from "../../../../constants/losses";
import { Asset } from "../../../../entities/assets";
import useGetLossesByTypes from "../../../../hooks/useGetLossesByTypes";
import LossesTableBody from "./LossesTableBody";
import LossesTableFoot from "./LossesTableFoot";
import LossesTableHead from "./LossesTableHead";

interface Props {
  asset: Asset;
  parentAsset: Asset;
}

const LossesTable = ({ asset, parentAsset }: Props) => {
  const parentAssetAttributes = parentAsset.attributes;
  const allAttributes = asset.attributes;
  const attributes = useGetLossesByTypes(allAttributes, lossTypes);

  return (
    <TableContainer overflowX="auto" whiteSpace="normal">
      <Table variant="striped" size="sm">
        <LossesTableHead />
        <LossesTableBody
          parentAssetAttributes={parentAssetAttributes}
          attributes={attributes!}
        />
        <LossesTableFoot
          parentAssetAttributes={parentAssetAttributes}
          attributes={attributes!}
        />
      </Table>
    </TableContainer>
  );
};

export default LossesTable;
