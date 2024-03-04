import { Badge, Tbody, Td, Tr } from "@chakra-ui/react";
import { User } from "../../entities/users";
import useUserStore from "../../store/user";

const UsersTableBody = ({ users }: { users: User[] }) => {
  const { page, pageSize } = useUserStore((s) => s.usersQuery);
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

          <Td textAlign="center">{/* <PHDTagEditButton tag={user} /> */}</Td>

          <Td textAlign="center">
            {/* <PHDTagDeleteButton tagId={user.id} /> */}
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default UsersTableBody;
