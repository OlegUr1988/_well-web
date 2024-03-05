import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { User } from "../../entities/users";
import useUserStore from "../../store/user";
import { clearToken, getToken } from "../../utils/auth";

const useAuth = () => {
  const { setUser } = useUserStore();

  useEffect(() => {
    let expireTimeout: NodeJS.Timeout | undefined;
    let redirectTimeout: NodeJS.Timeout | undefined;

    try {
      const token = getToken();
      const user = jwtDecode(token!);
      setUser(user as User);

      const exp = user.exp! * 1000;
      const currentTime = Date.now();
      const expireIn = exp! - currentTime;
      if (expireIn > 0)
        expireTimeout = setTimeout(() => {
          clearToken();
          toast.error("Session was expired!");

          redirectTimeout = setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        }, expireIn);
    } catch (error) {}

    return () => {
      if (expireTimeout) {
        clearTimeout(expireTimeout);
      }
      if (redirectTimeout) {
        clearTimeout(redirectTimeout);
      }
    };
  }, [setUser]);
};

export default useAuth;
