import { Button, Tbody, Td, Tr } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";
import timeFormat from "../../constants/timeFormat";
import Asset from "../../entities/Asset";
import useAssetStore from "../../store/assets";
import AssetDeleteButton from "./AssetDeleteButton";

const AssetsTableBody = ({ assets }: { assets: Asset[] }) => {
  const { page, pageSize } = useAssetStore((s) => s.assetQuery);

  return (
    <Tbody>
      {assets?.map((asset, index) => (
        <Tr key={asset.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">{asset.name}</Td>
          <Td textAlign="center">
            {moment(asset.created_at).format(timeFormat)}
          </Td>
          <Td textAlign="center">
            {moment(asset.updated_at).format(timeFormat)}
          </Td>
          <Td textAlign="center">
            <Link to={`/config/assets/${asset.id}`}>
              <Button colorScheme="yellow">Modify</Button>
            </Link>
          </Td>
          <Td textAlign="center">
            <AssetDeleteButton assetId={asset.id} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default AssetsTableBody;
