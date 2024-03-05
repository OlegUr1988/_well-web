import { ReactNode, useEffect } from "react";
import useUserStore from "../store/user";
import { getToken } from "../utils/auth";
import { jwtDecode } from "jwt-decode";
import { User } from "../entities/users";

const AuthContainer = ({ children }: { children: ReactNode }) => {
  const { setUser } = useUserStore();

  useEffect(() => {
    try {
      const token = getToken();
      const user = jwtDecode(token!);
      setUser(user as User);
    } catch (ex) {}
  }, [setUser]);

  return <>{children}</>;
};

export default AuthContainer;
