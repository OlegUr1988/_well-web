import { Button } from "@chakra-ui/react";

const CreateButton = ({
  label = "Create",
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CreateButton;
