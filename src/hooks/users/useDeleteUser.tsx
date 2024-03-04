import { useMutation } from "@tanstack/react-query";
import { users } from "../../services/usersServices";

const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string | number) => users.delete(id),
  });
};

export default useDeleteUser;
