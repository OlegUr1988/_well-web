import { Skeleton } from "@chakra-ui/react";
import { useUnits } from "../../../hooks/units";
import useUnitsStore from "../../../store/units";
import UnitsTable from "./UnitsTable";

const UnitssList = () => {
  const { page, pageSize, searchedName } = useUnitsStore((s) => s.unitsQuery);

  const {
    data: units,
    isLoading,
    error,
  } = useUnits({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {isLoading ? (
        <Skeleton h={400} borderRadius={10} />
      ) : (
        <UnitsTable units={units?.results!} />
      )}
    </>
  );
};

export default UnitssList;
