import { Button } from "@chakra-ui/react";

const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button colorScheme="red" onClick={onClick}>
      Delete
    </Button>
  );
};

export default DeleteButton;
