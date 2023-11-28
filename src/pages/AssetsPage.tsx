import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AssetsTable from "../components/AssetsTable";
import useAssets from "../hooks/useAssets";
import {
  FaAngleDoubleLeft,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useState } from "react";

const AssetsPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data: assets } = useAssets({ page, pageSize });

  const pageCounts = Math.ceil(assets?.count! / pageSize);

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
          <AssetsTable assets={assets?.results!} />
        </Box>

        <HStack>
          <Button isDisabled={page === 1} onClick={() => setPage(1)}>
            <FaAngleDoubleLeft />
          </Button>
          <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>
            <FaChevronLeft />
          </Button>
          <Text>
            {page} of {pageCounts}
          </Text>
          <Button
            isDisabled={pageCounts <= page}
            onClick={() => setPage(page + 1)}
          >
            <FaChevronRight />
          </Button>
          <Button
            isDisabled={pageCounts <= page}
            onClick={() => setPage(pageCounts)}
          >
            <FaAngleDoubleRight />
          </Button>
        </HStack>
      </Container>
    </>
  );
};

export default AssetsPage;
