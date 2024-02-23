import { useQuery } from "@tanstack/react-query";
import { User } from "../entities/users";
import { users } from "../services/usersServices";
import { getToken } from "../utils/auth";
import useUserStore from "../store/auth";

export const useUser = () => {
  const token = getToken();
  const {
    data: user,
    isLoading,
    data,
  } = useQuery<User, Error, User>({
    queryKey: ["user", token],
    queryFn: () => users.getUserInfo(token!),
    retry: 1,
  });

  const setUser = useUserStore((s) => s.setUser);
  const navigate = useNavigate();

  if (!user) {
    console.log(user);
    navigate("/login");
  } else if (user) {
    setUser(user);
  }
};
