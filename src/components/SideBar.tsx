import { Flex, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { GiGears } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import configNavLinks from "../constants/configNavLinks";

const SideBar = () => {
  const location = useLocation();

  return (
    <Flex bg="gray.700" direction="column" w={300}>
      <HStack mb={5} p={2} alignItems="center">
        <GiGears size={36} color="white" />
        <Text fontSize="xx-large" color="white" fontWeight={700}>
          Configuration
        </Text>
      </HStack>

      <List>
        {configNavLinks.map((link) => (
          <ListItem
            key={link.name}
            p={2}
            bg={location.pathname === link.url ? "blue.300" : ""}
          >
            <Link to={link.url}>
              <Flex alignItems="center">
                <ListIcon as={link.icon} color="white" mr={2} fontSize={18} />
                <Text
                  color="white"
                  fontWeight={700}
                  fontSize={20}
                  whiteSpace="nowrap"
                >
                  {link.name}
                </Text>
              </Flex>
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default SideBar;
