import { Button } from "@chakra-ui/react";
import { ChangeUserPasswordFormData } from "../../entities/formDatas";
import { User } from "../../entities/users";
import { useSetUserPassword } from "../../hooks/users";
import { changeUserPasswordSchema } from "../../validationSchema";
import SimpleModal from "../SimpleModal";
import useUserStore from "../../store/user";
import { clearToken } from "../../utils/auth";

const SetUserPasswordButton = ({ user }: { user: User }) => {
  const { mutateAsync, isPending } = useSetUserPassword(user.id);
  const sessionUser = useUserStore((s) => s.user);

  const handleOnSuccess = () => {
    if (sessionUser?.id === user.id) {
      clearToken();
      window.location.href = "/login";
    }
  };

  return (
    <SimpleModal<ChangeUserPasswordFormData>
      header="Change Password"
      label="New Password"
      submitLabel="Set"
      onSuccessMessage="The new password was successfully added"
      schema={changeUserPasswordSchema}
      name="password"
      renderTriggerButton={(onOpen) => (
        <Button colorScheme="blue" onClick={onOpen}>
          Set Password
        </Button>
      )}
      isPending={isPending}
      mutateAsync={mutateAsync}
      onSuccess={handleOnSuccess}
    />
  );
};

export default SetUserPasswordButton;
