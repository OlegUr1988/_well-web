import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUserStore from "../../store/user";
import { clearToken, getToken } from "../../utils/auth";

const useAuthExpiration = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    let expireTimeout: NodeJS.Timeout | undefined;

    try {
      const token = getToken();
      const { exp } = jwtDecode(token!);

      const expireTime = exp! * 1000;
      const currentTime = Date.now();
      const expireIn = expireTime! - currentTime;
      if (expireIn > 0)
        expireTimeout = setTimeout(() => {
          clearToken();
          setUser(null);
          toast.error("Session was expired!");
          navigate("/login");
        }, expireIn);
    } catch (error) {}

    return () => {
      if (expireTimeout) {
        clearTimeout(expireTimeout);
      }
    };
  }, [user, setUser]);
};

export default useAuthExpiration;
