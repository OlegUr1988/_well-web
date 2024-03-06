import { useUsers } from "../../../hooks/users";
import useDeleteUser from "../../../hooks/users/useDeleteUser";
import useUserStore from "../../../store/user";
import SimpleAlert from "../../SimpleAlert";
import { DeleteButton } from "../../common/buttons";

const UserDeleteButton = ({ userId }: { userId: number }) => {
  const { mutateAsync, isPending } = useDeleteUser();

  const { page, pageSize } = useUserStore((s) => s.usersQuery);
  const { data: units } = useUsers({ page, pageSize });
  const setPage = useUserStore((s) => s.setPage);

  const handlePagination = () => {
    if (units?.results.length === 1 && page! > 1) setPage(page! - 1);
  };
  return (
    <SimpleAlert
      header="Delete the user?"
      content="Are you sure to delete this user?"
      onSuccessMessage="The user was successfully deleted"
      isPending={isPending}
      mutateAsync={() => mutateAsync(userId)}
      onSuccess={handlePagination}
      renderTriggerButton={(onOpen) => <DeleteButton onClick={onOpen} />}
    />
  );
};

export default UserDeleteButton;
