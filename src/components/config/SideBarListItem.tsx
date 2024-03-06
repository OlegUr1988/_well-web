import { Link, ListItem } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

const SideBarListItem = ({ to, text }: Props) => {
  const location = useLocation();
  return (
    <ListItem p={1} bg={location.pathname === to ? "blue.400" : ""}>
      <Link
        as={NavLink}
        color="white"
        fontSize="xl"
        fontWeight={600}
        to={to}
        _hover={{ textDecoration: "none" }}
      >
        {text}
      </Link>
    </ListItem>
  );
};

export default SideBarListItem;
