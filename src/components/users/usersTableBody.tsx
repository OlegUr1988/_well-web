import { Badge, Tbody, Td, Tr } from "@chakra-ui/react";
import { User } from "../../entities/users";
import useUserStore from "../../store/user";
import SetUserPasswordButton from "./SetUserPasswordButton";
import UserDeleteButton from "./UserDeleteButton";
import UserEditButton from "./UserEditButton";

const UsersTableBody = ({ users }: { users: User[] }) => {
  const { page, pageSize } = useUserStore((s) => s.usersQuery);
  const sessionUser = useUserStore((s) => s.user);

  return (
    <Tbody>
      {users?.map((user, index) => (
        <Tr key={user.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">{user.username}</Td>
          <Td textAlign="center">
            {user?.isAdmin ? (
              <Badge colorScheme="green">Admin user</Badge>
            ) : (
              <Badge>Operator</Badge>
            )}
          </Td>

          <Td textAlign="center">
            <UserEditButton user={user} />
          </Td>

          <Td textAlign="center">
            <SetUserPasswordButton user={user} />
          </Td>

          <Td textAlign="center">
            {sessionUser?.id !== user.id && (
              <UserDeleteButton userId={user.id} />
            )}
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default UsersTableBody;
