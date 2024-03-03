import { ReactNode, useEffect } from "react";
import { useUser } from "../hooks/users";
import useUserStore from "../store/auth";

const AuthContainer = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading } = useUser();
  const { setUser } = useUserStore();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  if (isLoading) return null;

  return <>{children}</>;
};

export default AuthContainer;
