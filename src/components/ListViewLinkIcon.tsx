import { GoLinkExternal } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { IconButton } from "./common/buttons";

const ListViewLinkIcon = ({ path }: { path: string }) => {
  return (
    <NavLink target="_blank" to={path}>
      <IconButton
        size="xs"
        variant="unstyled"
        btnColorScheme="gray"
        icon={<GoLinkExternal color="white" />}
      />
    </NavLink>
  );
};

export default ListViewLinkIcon;
