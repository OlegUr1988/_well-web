import { useConstants } from "../../../hooks/constants";
import useConstantsStore from "../../../store/constants";
import useUnitsStore from "../../../store/units";
import Pagination from "../../common/Pagination";

const ConstantsPagination = () => {
  const { page, pageSize, searchedName } = useConstantsStore(
    (s) => s.constantsQuery
  );
  const setPage = useUnitsStore((s) => s.setPage);

  const { data: constants, error } = useConstants({
    page,
    pageSize,
    searchedName,
  });

  if (error) return null;

  return (
    <>
      {constants?.count! > pageSize! && (
        <Pagination
          page={page!}
          count={constants?.count!}
          pageSize={pageSize!}
          onFirstPagePress={() => setPage(1)}
          onPreviousPagePress={() => setPage(page! - 1)}
          onNextPagePress={() => setPage(page! + 1)}
          onLastPagePress={() =>
            setPage(Math.ceil(constants?.count! / pageSize!))
          }
        />
      )}
    </>
  );
};

export default ConstantsPagination;
