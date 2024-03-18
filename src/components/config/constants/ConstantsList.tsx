import { Skeleton } from "@chakra-ui/react";
import { useConstants } from "../../../hooks/constants";
import useConstantsStore from "../../../store/constants";
import ConstantsTable from "./ConstantsTable";

const ConstantsList = () => {
  const { page, pageSize, searchedName } = useConstantsStore(
    (s) => s.constantsQuery
  );

  const {
    data: constants,
    isLoading,
    error,
  } = useConstants({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {isLoading ? (
        <Skeleton h={400} borderRadius={10} />
      ) : (
        <ConstantsTable constants={constants?.results!} />
      )}
    </>
  );
};

export default ConstantsList;
