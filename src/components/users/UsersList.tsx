import { Skeleton } from "@chakra-ui/react";
import useUsers from "../../hooks/users/useUsers";
import useUserStore from "../../store/user";
import UsersTable from "./UsersTable";

const UsersList = () => {
  const { page, pageSize, searchedName } = useUserStore((s) => s.usersQuery);

  const {
    data: users,
    isLoading,
    error,
  } = useUsers({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {isLoading ? (
        <Skeleton h={400} borderRadius={10} />
      ) : (
        <UsersTable users={users?.results!} />
      )}
    </>
  );
};

export default UsersList;
