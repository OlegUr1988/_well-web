import { Box, Container, Heading, Skeleton } from "@chakra-ui/react";
import AssetPanel from "../components/AssetPanel";
import AssetsTable from "../components/AssetsTable";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import useAssets from "../hooks/useAssets";
import useAssetStore from "../store/assets";

const AssetsPage = () => {
  const { page, pageSize, searchedName } = useAssetStore((s) => s.assetQuery);
  const setSearchedName = useAssetStore((s) => s.setSearchedName);
  const setPage = useAssetStore((s) => s.setPage);

  const {
    data: assets,
    isLoading,
    error,
  } = useAssets({ page, pageSize, searchedName });

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };

  if (error) return null;

  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Assets</Heading>

        <Box mb={5}>
          <AssetPanel />
        </Box>

        <Box mb={3}>
          <SearchInput onSearch={(e) => handleSearch(e)} />
        </Box>

        <Box mb={5}>
          {isLoading ? (
            <Skeleton h={400} borderRadius={10} />
          ) : (
            <AssetsTable assets={assets?.results!} />
          )}
        </Box>

        {assets?.count! > pageSize! && (
          <Pagination
            page={page!}
            count={assets?.count!}
            pageSize={pageSize!}
            onFirstPagePress={() => setPage(1)}
            onPreviousPagePress={() => setPage(page! - 1)}
            onNextPagePress={() => setPage(page! + 1)}
            onLastPagePress={() =>
              setPage(Math.ceil(assets?.count! / pageSize!))
            }
          />
        )}
      </Container>
    </>
  );
};

export default AssetsPage;
