import { useAssets, useDeleteAsset } from "../../hooks/assets";
import useAssetStore from "../../store/assets";
import DeleteButton from "../DeleteButton";

const AssetDeleteButton = ({ assetId }: { assetId: number }) => {
  const { mutateAsync, isPending } = useDeleteAsset();

  const { page, pageSize } = useAssetStore((s) => s.assetQuery);
  const { data: assets } = useAssets({ page, pageSize });
  const setPage = useAssetStore((s) => s.setPage);

  const handlePagination = () => {
    if (assets?.results.length === 1 && page! > 1) setPage(page! - 1);
  };

  return (
    <DeleteButton
      itemId={assetId}
      itemName="asset"
      routeAfterDelete="/config/assets"
      isPending={isPending}
      mutateAsync={mutateAsync}
      onSuccess={handlePagination}
    />
  );
};

export default AssetDeleteButton;
