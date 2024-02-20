import { useQuery } from "@tanstack/react-query";
import { User } from "../entities/users";
import { users } from "../services/usersServices";
import { getToken } from "../utils/auth";

const useUser = () => {
  const token = getToken();
  return useQuery<User, Error, User>({
    queryKey: ["user", token],
    queryFn: () => users.getUserInfo(token!),
    retry: 1,
  });
};

export default useUser;
