import { HStack, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import useUserStore from "../../store/user";
import AvatarMenu from "./AvatarMenu";

const NavBar = () => {
  const user = useUserStore((s) => s.user);

  return (
    <HStack
      bgColor="gray.700"
      borderBottom="1px solid gray"
      py={1}
      px={3}
      justify="space-between"
    >
      <NavLink to="/">
        <Heading color="red">Honeywell</Heading>
      </NavLink>
      <HStack>
        <NavLink to="models" className="nav-link">
          <Text color="white">Models</Text>
        </NavLink>
        <NavLink to="config" className="nav-link">
          <Text color="white">Configurations</Text>
        </NavLink>
        {!user && (
          <NavLink to="login" className="nav-link">
            <Text color="white">Login</Text>
          </NavLink>
        )}
        {user && <AvatarMenu />}
      </HStack>
    </HStack>
  );
};

export default NavBar;
