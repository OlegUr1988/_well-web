import { usePHDTags } from "../../../hooks/PHDTags";
import usePHDTagStore from "../../../store/phdTags";
import Pagination from "../../common/Pagination";

const PHDTagsPagination = () => {
  const { page, pageSize, searchedName } = usePHDTagStore(
    (s) => s.PHDTagsQuery
  );
  const setPage = usePHDTagStore((s) => s.setPage);

  const { data: tags, error } = usePHDTags({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {tags?.count! > pageSize! && (
        <Pagination
          page={page!}
          count={tags?.count!}
          pageSize={pageSize!}
          onFirstPagePress={() => setPage(1)}
          onPreviousPagePress={() => setPage(page! - 1)}
          onNextPagePress={() => setPage(page! + 1)}
          onLastPagePress={() => setPage(Math.ceil(tags?.count! / pageSize!))}
        />
      )}
    </>
  );
};

export default PHDTagsPagination;
