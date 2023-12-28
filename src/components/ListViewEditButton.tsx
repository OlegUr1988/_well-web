import { Button } from "@chakra-ui/react";
import { MdOutlineEdit } from "react-icons/md";

const ListViewEditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button size="xs" variant="outline" color="white" onClick={onClick}>
      <MdOutlineEdit />
    </Button>
  );
};

export default ListViewEditButton;
