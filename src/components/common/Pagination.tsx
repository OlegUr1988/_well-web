import { Button, HStack, Text } from "@chakra-ui/react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface Props {
  page: number;
  count: number;
  pageSize: number;
  onFirstPagePress: () => void;
  onPreviousPagePress: () => void;
  onNextPagePress: () => void;
  onLastPagePress: () => void;
}

const Pagination = ({
  page,
  count,
  pageSize,
  onFirstPagePress,
  onPreviousPagePress,
  onNextPagePress,
  onLastPagePress,
}: Props) => {
  const pageCounts = Math.ceil(count / pageSize);

  return (
    <HStack>
      <Button isDisabled={page === 1} onClick={onFirstPagePress}>
        <FaAngleDoubleLeft />
      </Button>
      <Button isDisabled={page === 1} onClick={onPreviousPagePress}>
        <FaChevronLeft />
      </Button>
      <Text>
        {page} of {pageCounts}
      </Text>
      <Button isDisabled={pageCounts <= page} onClick={onNextPagePress}>
        <FaChevronRight />
      </Button>
      <Button isDisabled={pageCounts <= page} onClick={onLastPagePress}>
        <FaAngleDoubleRight />
      </Button>
    </HStack>
  );
};

export default Pagination;
