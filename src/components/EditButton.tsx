import { Button } from "@chakra-ui/react";

const EditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button colorScheme="yellow" onClick={onClick}>
      Edit
    </Button>
  );
};

export default EditButton;
