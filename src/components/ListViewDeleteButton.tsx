import { Button } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";

const ListViewDeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button size="xs" variant="outline" color="white" onClick={onClick}>
      <FaRegTrashAlt />
    </Button>
  );
};

export default ListViewDeleteButton;
