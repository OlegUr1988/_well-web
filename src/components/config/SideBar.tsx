import { Flex, HStack, List, Text } from "@chakra-ui/react";
import { GiGears } from "react-icons/gi";
import useUserStore from "../../store/user";
import SideBarListItem from "../SideBarListItem";

const SideBar = () => {
  const user = useUserStore((s) => s.user);

  return (
    <Flex bg="gray.700" direction="column" w={300}>
      <HStack mb={3} p={2} alignItems="center">
        <GiGears size={36} color="white" />
        <Text fontSize="xx-large" color="white" fontWeight={700}>
          Configuration
        </Text>
      </HStack>
      <List>
        {user && user.isAdmin && (
          <SideBarListItem to="/config/users" text="Users" />
        )}
        <SideBarListItem to="/config/tags" text="PHD Tags" />
        <SideBarListItem to="/config/units" text="Units" />
        <SideBarListItem to="/config/datasource" text="Data Source" />
        {user && (
          <SideBarListItem
            to="/config/change-password"
            text="Change Password"
          />
        )}
      </List>
    </Flex>
  );
};

export default SideBar;
