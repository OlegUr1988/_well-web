import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { users } from "../../services/usersServices";
import { FetchResponse } from "../../services/api-client";
import { User, UserQuery } from "../../entities/users";

const useUsers = (query: UserQuery) => {
  return useQuery<FetchResponse<User>, Error>({
    queryKey: ["users", query],
    queryFn: () => users.getFetchResponse({ params: query }),
    placeholderData: keepPreviousData,
  });
};

export default useUsers;
