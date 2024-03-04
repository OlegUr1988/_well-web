import { Th, Thead, Tr } from "@chakra-ui/react";

const UsersTableHead = () => {
  return (
    <Thead>
      <Tr height={12}>
        <Th textAlign="center">#</Th>
        <Th textAlign="center">Username</Th>
        <Th textAlign="center">isAdmin</Th>
        <Th></Th>
        <Th></Th>
      </Tr>
    </Thead>
  );
};

export default UsersTableHead;
