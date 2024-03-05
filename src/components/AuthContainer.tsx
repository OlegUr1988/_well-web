import { ReactNode } from "react";
import { useAuth } from "../hooks/auth/";

const AuthContainer = ({ children }: { children: ReactNode }) => {
  useAuth();

  return <>{children}</>;
};

export default AuthContainer;
