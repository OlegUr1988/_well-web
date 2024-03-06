import { Table, TableContainer } from "@chakra-ui/react";
import { User } from "../../../entities/users";
import UsersTableHead from "./UsersTableHead";
import UsersTableBody from "./UsersTableBody";

const UsersTable = ({ users }: { users: User[] }) => {
  return (
    <TableContainer border="1px" borderRadius={10} borderColor="gray.200">
      <Table variant="striped" size="sm">
        <UsersTableHead />
        <UsersTableBody users={users} />
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
