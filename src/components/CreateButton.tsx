import { Button } from "@chakra-ui/react";

const CreateButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      Create
    </Button>
  );
};

export default CreateButton;
