import { useMutation } from "@tanstack/react-query";
import { ChangeUserPassword } from "../../entities/users";
import { setUserPassword } from "../../services/usersServices";

const useSetUserPassword = (id: string | number) => {
  return useMutation<ChangeUserPassword, Error, ChangeUserPassword>({
    mutationFn: (user) => setUserPassword.put(id, user),
  });
};

export default useSetUserPassword;
