import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { User } from "../../entities/users";
import useUserStore from "../../store/user";
import { getToken } from "../../utils/auth";

const useAuth = () => {
  const setUser = useUserStore((s) => s.setUser);

  useEffect(() => {
    try {
      const token = getToken();
      const user = jwtDecode(token!);
      setUser(user as User);
    } catch (error) {}
  }, []);
};

export default useAuth;
