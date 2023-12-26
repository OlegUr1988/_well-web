import { Spinner, VStack } from "@chakra-ui/react";

const ListViewSpinner = () => {
  return (
    <VStack h="100%" width={250} bgColor="gray.700" justifyItems="center">
      <Spinner my="auto" color="white" />;
    </VStack>
  );
};

export default ListViewSpinner;
