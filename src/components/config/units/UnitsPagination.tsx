import { useUnits } from "../../../hooks/units";
import useUnitsStore from "../../../store/units";
import { Pagination } from "../../common";

const UnitsPagination = () => {
  const { page, pageSize, searchedName } = useUnitsStore((s) => s.unitsQuery);
  const setPage = useUnitsStore((s) => s.setPage);

  const { data: units, error } = useUnits({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {units?.count! > pageSize! && (
        <Pagination
          page={page!}
          count={units?.count!}
          pageSize={pageSize!}
          onFirstPagePress={() => setPage(1)}
          onPreviousPagePress={() => setPage(page! - 1)}
          onNextPagePress={() => setPage(page! + 1)}
          onLastPagePress={() => setPage(Math.ceil(units?.count! / pageSize!))}
        />
      )}
    </>
  );
};

export default UnitsPagination;
