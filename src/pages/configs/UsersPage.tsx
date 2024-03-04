import { Box, Container, Heading } from "@chakra-ui/react";
import { UsersList } from "../../components/users";
import UserCommandPanel from "../../components/users/UserCommandPanel";
import UserSearchInput from "../../components/users/UserSearchInput";
import UsersPagination from "../../components/users/UsersPagination";

const UsersPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Users</Heading>

        <Box mb={5}>
          <UserCommandPanel />
        </Box>

        <Box mb={5}>
          <UserSearchInput />
        </Box>

        <Box mb={5}>
          <UsersList />
        </Box>

        <UsersPagination />
      </Container>
    </>
  );
};

export default UsersPage;
