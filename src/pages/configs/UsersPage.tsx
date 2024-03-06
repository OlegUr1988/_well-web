import { Box, Container, Heading } from "@chakra-ui/react";
import { UsersList } from "../../components/config/users";
import UserCommandPanel from "../../components/config/users/UserCommandPanel";
import UserSearchInput from "../../components/config/users/UserSearchInput";
import UsersPagination from "../../components/config/users/UsersPagination";

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
