import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { User } from "../../entities/users";
import useUserStore from "../../store/user";
import { clearToken, getToken } from "../../utils/auth";

const useAuth = () => {
  const setUser = useUserStore((s) => s.setUser);

  useEffect(() => {
    try {
      const token = getToken();
      const user = jwtDecode(token!);
      const expireTime = user.exp! * 1000;
      const currentTime = Date.now();
      if (currentTime > expireTime) {
        clearToken();
      }
      setUser(user as User);
    } catch (error) {}
  }, []);
};

export default useAuth;
