import { Center } from "@chakra-ui/react";

interface Props {
  message: string;
  height?: number;
}

const MessageComponent = ({ message, height }: Props) => {
  return (
    <Center fontSize="20" fontWeight="bold" height={height} textAlign="center">
      {message}
    </Center>
  );
};

export default MessageComponent;
