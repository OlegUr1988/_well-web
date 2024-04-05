import { AbsoluteCenter, Box, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Box bg="black" opacity={0.7} w="100%" h="100%">
      <AbsoluteCenter>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </AbsoluteCenter>
    </Box>
  );
};

export default LoadingSpinner;
