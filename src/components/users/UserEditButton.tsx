import { User } from "../../entities/users";
import useUpdateUser from "../../hooks/users/useUpdateUser";
import useUserStore from "../../store/user";
import { clearToken } from "../../utils/auth";
import { EditButton } from "../common/buttons";
import UserModal from "./UserModal";

const UserEditButton = ({ user }: { user: User }) => {
  const { mutateAsync, isPending } = useUpdateUser(user.id);
  const sessionUser = useUserStore((s) => s.user);

  return (
    <UserModal
      header="Edit User Detail"
      onSuccessMessage="The user was successfuly modified"
      submitLabel="Save"
      defaultUser={user}
      isPending={isPending}
      mutateAsync={mutateAsync}
      renderTriggerButton={(onOpen) => <EditButton onClick={onOpen} />}
      onSuccess={() => {
        if (sessionUser?.id === user.id) {
          clearToken();
          window.location.href = "/login";
        }
      }}
    />
  );
};

export default UserEditButton;
