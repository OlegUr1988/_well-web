import { Flex, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/common/";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Flex height="100%" direction="column">
      <NavBar />
      <Flex
        direction="column"
        justify="center"
        align="center"
        padding={5}
        flex={1}
      >
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Not found | 404 error"
            : "Unexpected error occurred."}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ErrorPage;
