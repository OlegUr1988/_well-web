import { useMutation } from "@tanstack/react-query";
import { Login } from "../entities/auth";
import { auth } from "../services/authServices";
import { JWT } from "../services/api-client";

const useLogin = () => {
  return useMutation<JWT, Error, Login>({
    mutationFn: (data) => auth.login(data),
  });
};

export default useLogin;
