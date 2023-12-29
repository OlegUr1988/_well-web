import { Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const ListViewCreateButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button variant="outline" mt={3} color="white" w="100%" onClick={onClick}>
      <FaPlus />
    </Button>
  );
};

export default ListViewCreateButton;
