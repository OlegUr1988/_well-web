import { Box, Button, Container, Heading, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AssetsTable from "../components/AssetsTable";
import useAssets from "../hooks/useAssets";
import Pagination from "../components/Pagination";

const AssetsPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data: assets, isLoading, error } = useAssets({ page, pageSize });

  if (error) return null;

  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Assets</Heading>

        <Box mb={5}>
          <Link to="/config/assets/new">
            <Button colorScheme="blue">Create asset</Button>
          </Link>
        </Box>

        <Box mb={5}>
          {isLoading ? (
            <Skeleton h={400} borderRadius={10} />
          ) : (
            <AssetsTable assets={assets?.results!} />
          )}
        </Box>

        {assets?.count! > pageSize && (
          <Pagination
            page={page}
            count={assets?.count!}
            pageSize={pageSize}
            onFirstPagePress={() => setPage(1)}
            onPreviousPagePress={() => setPage(page - 1)}
            onNextPagePress={() => setPage(page + 1)}
            onLastPagePress={() =>
              setPage(Math.ceil(assets?.count! / pageSize))
            }
          />
        )}
      </Container>
    </>
  );
};

export default AssetsPage;
