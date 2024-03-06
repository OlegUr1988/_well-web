import { Box, Heading, VStack } from "@chakra-ui/react";
import useUserStore from "../../store/user";
import ListViewSpinner from "./ListViewSpinner";

interface Props {
  title: string;
  isLoading: boolean;
  error: Error | null;
  listComponent: JSX.Element;
  createButtonComponent: JSX.Element;
}

const ListView = ({
  title,
  isLoading,
  error,
  listComponent,
  createButtonComponent,
}: Props) => {
  const user = useUserStore((s) => s.user);

  if (isLoading) return <ListViewSpinner />;

  if (error) return null;

  return (
    <VStack
      h="100%"
      width={250}
      bgColor="gray.700"
      alignItems="start"
      borderRight="1px solid gray"
    >
      <Heading color="white" size="lg" px={2} my={3}>
        {title}
      </Heading>

      {listComponent}

      <Box p={2} w="100%">
        {user && createButtonComponent}
      </Box>
    </VStack>
  );
};

export default ListView;
