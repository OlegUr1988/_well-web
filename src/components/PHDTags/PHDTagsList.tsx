import { Skeleton } from "@chakra-ui/react";
import { usePHDTags } from "../../hooks/PHDTags";
import usePHDTagStore from "../../store/phdTags";
import PHDTagsTable from "./PHDTagsTable";

const PHDTagsList = () => {
  const { page, pageSize, searchedName } = usePHDTagStore(
    (s) => s.PHDTagsQuery
  );

  const {
    data: tags,
    isLoading,
    error,
  } = usePHDTags({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {isLoading ? (
        <Skeleton h={400} borderRadius={10} />
      ) : (
        <PHDTagsTable tags={tags?.results!} />
      )}
    </>
  );
};

export default PHDTagsList;
