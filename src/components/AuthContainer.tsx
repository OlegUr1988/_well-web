import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import useUserStore from "../store/auth";

const AuthContainer = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading, error } = useUser();
  const setUser = useUserStore((s) => s.setUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/login");
    } else if (user) {
      setUser(user);
    }
  }, [user, error]);

  if (isLoading) return null;
  return <>{children}</>;
};

export default AuthContainer;
