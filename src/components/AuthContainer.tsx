import { ReactNode } from "react";
import { useAuth, useAuthExpiration } from "../hooks/auth/";

const AuthContainer = ({ children }: { children: ReactNode }) => {
  useAuth();
  useAuthExpiration();

  return <>{children}</>;
};

export default AuthContainer;
