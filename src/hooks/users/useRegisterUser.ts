import { useMutation } from "@tanstack/react-query";
import { RegisterUser } from "../../entities/users";
import { registerUser } from "../../services/usersServices";

const useRegisterUser = () => {
  return useMutation<RegisterUser, Error, RegisterUser>({
    mutationFn: registerUser.post,
  });
};

export default useRegisterUser;
