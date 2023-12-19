import { Skeleton } from "@chakra-ui/react";
import { useAssets } from "../../hooks/assets";
import useAssetStore from "../../store/assets";
import AssetsTable from "./AssetsTable";

const AssetsList = () => {
  const { page, pageSize, searchedName } = useAssetStore((s) => s.assetQuery);

  const {
    data: assets,
    isLoading,
    error,
  } = useAssets({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {isLoading ? (
        <Skeleton h={400} borderRadius={10} />
      ) : (
        <AssetsTable assets={assets?.results!} />
      )}
    </>
  );
};

export default AssetsList;
