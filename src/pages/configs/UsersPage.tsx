import { Box, Container, Heading } from "@chakra-ui/react";
import {
  UserCommandPanel,
  UserSearchInput,
  UsersList,
  UsersPagination,
} from "../../components/config/users";

const UsersPage = () => {
  return (
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
  );
};

export default UsersPage;
