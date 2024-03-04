import { useMutation } from "@tanstack/react-query";
import { UpdateUser } from "../../entities/users";
import { updateUser } from "../../services/usersServices";

const useUpdateUser = (id: string | number) => {
  return useMutation<UpdateUser, Error, UpdateUser>({
    mutationFn: (user) => updateUser.put(id, user),
  });
};

export default useUpdateUser;
