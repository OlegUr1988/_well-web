import useRegisterUser from "../../../hooks/users/useRegisterUser";
import { CreateButton } from "../../common/buttons";
import UserRegisterModal from "./UserRegisterModal";

const UserCreateButton = () => {
  const { mutateAsync, isPending } = useRegisterUser();
  return (
    <UserRegisterModal
      header="Register a new user"
      onSuccessMessage="The user was successfuly registered"
      submitLabel="Register"
      isPending={isPending}
      mutateAsync={mutateAsync}
      renderTriggerButton={(onOpen) => (
        <CreateButton label="Register" onClick={onOpen} />
      )}
    />
  );
};

export default UserCreateButton;
