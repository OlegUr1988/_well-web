import { useMutation } from "@tanstack/react-query";
import { ChangeUserPassword } from "../../entities/users";
import { changeUserPassword } from "../../services/usersServices";

const useChangeUserPassword = () => {
  return useMutation<ChangeUserPassword, Error, ChangeUserPassword>({
    mutationFn: (password) => changeUserPassword.put(0, password),
  });
};

export default useChangeUserPassword;
