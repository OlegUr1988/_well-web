import {
  Avatar,
  Badge,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import useUserStore from "../store/user";
import { clearToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const AvatarMenu = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton>
        <Avatar name={user?.username} size="sm" bg="gray" />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <HStack justify={"space-between"}>
            <Text>Username:</Text>
            <Text fontWeight={600}>{user?.username}</Text>
          </HStack>
        </MenuItem>
        <MenuItem>
          <HStack justify={"space-between"}>
            <Text>Role:</Text>
            {user?.isAdmin ? (
              <Badge colorScheme="green">Admin user</Badge>
            ) : (
              <Badge>Operator</Badge>
            )}
          </HStack>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            clearToken();
            setUser(null);
            navigate("/");
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;
