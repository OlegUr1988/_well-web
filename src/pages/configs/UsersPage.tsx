import { Box, Container, Heading } from "@chakra-ui/react";
import { UsersList } from "../../components/users";

const UsersPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={5}>Users</Heading>

        <Box mb={5}>
          <UsersList />
        </Box>
      </Container>
    </>
  );
};

export default UsersPage;
