import { ReactNode } from "react";
import { useAuthExpiration, useAuth } from "../hooks/auth/";

const AuthContainer = ({ children }: { children: ReactNode }) => {
  useAuth();
  useAuthExpiration();

  return <>{children}</>;
};

export default AuthContainer;
