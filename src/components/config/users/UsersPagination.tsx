import { useUsers } from "../../../hooks/users";
import useUserStore from "../../../store/user";
import { Pagination } from "../../common";

const UsersPagination = () => {
  const { page, pageSize, searchedName } = useUserStore((s) => s.usersQuery);
  const setPage = useUserStore((s) => s.setPage);

  const { data: users, error } = useUsers({ page, pageSize, searchedName });

  if (error) return null;

  return (
    <>
      {users?.count! > pageSize! && (
        <Pagination
          page={page!}
          count={users?.count!}
          pageSize={pageSize!}
          onFirstPagePress={() => setPage(1)}
          onPreviousPagePress={() => setPage(page! - 1)}
          onNextPagePress={() => setPage(page! + 1)}
          onLastPagePress={() => setPage(Math.ceil(users?.count! / pageSize!))}
        />
      )}
    </>
  );
};

export default UsersPagination;
