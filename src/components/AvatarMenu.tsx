import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useUserStore from "../store/auth";
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
        <MenuItem>{user?.username}</MenuItem>
        <MenuItem>{user?.isAdmin ? "Admin" : "User"}</MenuItem>
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
