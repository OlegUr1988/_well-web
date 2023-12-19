import { useAssets } from "../../hooks/assets";
import useAssetStore from "../../store/assets";
import Pagination from "../Pagination";

const AssetsPagination = () => {
  const { page, pageSize, searchedName } = useAssetStore((s) => s.assetQuery);
  const setPage = useAssetStore((s) => s.setPage);

  const { data: assets, error } = useAssets({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {assets?.count! > pageSize! && (
        <Pagination
          page={page!}
          count={assets?.count!}
          pageSize={pageSize!}
          onFirstPagePress={() => setPage(1)}
          onPreviousPagePress={() => setPage(page! - 1)}
          onNextPagePress={() => setPage(page! + 1)}
          onLastPagePress={() => setPage(Math.ceil(assets?.count! / pageSize!))}
        />
      )}
    </>
  );
};

export default AssetsPagination;
