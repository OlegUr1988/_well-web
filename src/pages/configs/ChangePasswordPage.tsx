import { Container, Heading } from "@chakra-ui/react";
import { ChangeUserPasswordForm } from "../../components/config/users";

const ChangePasswordPage = () => {
  return (
    <Container maxW="container.xl">
      <Heading mb={5}>Change Password</Heading>
      <ChangeUserPasswordForm />
    </Container>
  );
};

export default ChangePasswordPage;
